const DiseaseSymptom = require("../models/disease-symptoms")

class DiseaseSymptomsSV {
    static async all() {
        return await DiseaseSymptom.findAll()
    }
    static async allBSymtom(ids) {
        return await DiseaseSymptom.findAll({ where: { symptomId: ids } })
    }
    static async symptoms(diseaseId) {
        return await DiseaseSymptom.findAll({ where: { diseaseId: diseaseId } })
    }
    static async one(id) {
        return await DiseaseSymptom.findByPk(id)
    }
    static async exists({ diseaseId, symptomId }) {
        const record = await DiseaseSymptom.findOne({
            where: {
                diseaseId: diseaseId,
                symptomId: symptomId
            }
        });
        return !!record;
    }
    static async down({ diseaseId, symptomId }) {
        return await DiseaseSymptom.destroy({
            where: {
                diseaseId: diseaseId,
                symptomId: symptomId
            }
        });
    }


    static async up(data) {
        return await DiseaseSymptom.create(data)
    }
    static async edit(id, data) {
        return await DiseaseSymptom.update(data, { where: { id } });
    }


}

module.exports = DiseaseSymptomsSV;