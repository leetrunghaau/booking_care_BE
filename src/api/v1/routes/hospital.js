// addressRoutes.js

const express = require('express');
const HospitalCo = require('../controllers/hospital');
const router = express.Router();

// Define routes
router.get("/hospitals",HospitalCo.all);
router.get("/hospital/:slug",HospitalCo.oneBySlug);


module.exports = router;