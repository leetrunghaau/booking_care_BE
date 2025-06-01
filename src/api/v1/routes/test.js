// addressRoutes.js

const express = require('express');
const Specialties = require('../controllers/specialties');
const SymptomsSV = require('../services/symptom');
const { resOk } = require('../helpers/utils');
const DiseaseSV = require('../services/disease');
const createHttpError = require('http-errors');
const DiseaseSymptomsSV = require('../services/disease-symptoms');
const DiseaseSpecialtySV = require('../services/disease-specialty');
const router = express.Router();

// Define routes
router.get("/test", async (req, res, next) => {

    try {
        const processDuplicateSymptom = async (name) => {
            const symptoms = await SymptomsSV.allByName(name);
            if (symptoms.length <= 1) {
                return; // Không có bản sao để xử lý
            }

            const [mainSymptom, ...duplicates] = symptoms;

            // Xử lý từng triệu chứng trùng
            for (const duplicate of duplicates) {
                const diseaseLinks = await DiseaseSymptomsSV.allBSymtom(duplicate.id);

                // Chuyển liên kết từng bệnh
                for (const link of diseaseLinks) {
                    const alreadyLinked = await DiseaseSymptomsSV.exists({
                        diseaseId: link.diseaseId,
                        symptomId: mainSymptom.id,
                    });

                    if (!alreadyLinked) {
                        await DiseaseSymptomsSV.up({
                            diseaseId: link.diseaseId,
                            symptomId: mainSymptom.id,
                        });
                    }

                    await DiseaseSymptomsSV.down({
                        diseaseId: link.diseaseId,
                        symptomId: duplicate.id,
                    });
                }
            }

            // Xoá triệu chứng trùng
            const duplicateIds = duplicates.map((s) => s.id);
            await SymptomsSV.down(duplicateIds);

            console.log(`✅ Đã xử lý: "${name}" → giữ lại ID ${mainSymptom.id}, xoá ${duplicateIds.length} bản trùng.`);
        };
        const symptomNames = await SymptomsSV.allName();

        for (const { name } of symptomNames) {
            await processDuplicateSymptom(name);
        }

        resOk(res, null);
        resOk(res, null);

    } catch (error) {
        console.log(error);
        return next(createHttpError.InternalServerError());
    }
});
router.post("/test", async (req, res, next) => {

    try {
       
        if(!req.body?.name) return resOk(res, "nhập tên triệu chứng");
        const symptomIds =  (await SymptomsSV.allName(req.body.name)).map(i=>i.id)
        if(symptomIds.length == 0) return resOk(res, "không tìm ra triệu chứng");
        
        const diseaseIds =  (await DiseaseSymptomsSV.allBSymtom(symptomIds)).map(i=> i.diseaseId)
        if(diseaseIds.length == 0) return resOk(res, "không tìm bệnh");
        
        const t = await DiseaseSpecialtySV.downByDiseaseId(diseaseIds)
        resOk(res, "xóa thành công");

    } catch (error) {
        console.log(error);
        return next(createHttpError.InternalServerError());
    }
});


module.exports = router;