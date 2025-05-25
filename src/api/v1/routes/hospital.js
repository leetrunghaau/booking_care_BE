// addressRoutes.js

const express = require('express');
const HospitalCo = require('../controllers/hospital');
const router = express.Router();

// Define routes
router.get("/hospitals",HospitalCo.all);
router.get("/hospital/:slug",HospitalCo.oneBySlug);
router.get("/hospital/:id/doctors",HospitalCo.doctorsById);
router.get("/hospital/:id/specsialties",HospitalCo.specialtiesById);


module.exports = router;