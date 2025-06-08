// addressRoutes.js

const express = require('express');
const Specialties = require('../controllers/specialties');
const SymptomsSV = require('../services/symptom');
const { resOk } = require('../helpers/utils');
const DiseaseSV = require('../services/disease');
const createHttpError = require('http-errors');
const DiseaseSymptomsSV = require('../services/disease-symptoms');
const DiseaseSpecialtySV = require('../services/disease-specialty');
const { uploadSingleFileWithSubPath } = require('../middlewares/upload-middleware');
const router = express.Router();

// Define routes

router.post("/test",uploadSingleFileWithSubPath('avatar', 'uploads/avata'),  async (req, res, next) => {

    try {

        resOk(res,req.customFile);

    } catch (error) {
        console.log(error);
        return next(createHttpError.InternalServerError());
    }
});


module.exports = router;