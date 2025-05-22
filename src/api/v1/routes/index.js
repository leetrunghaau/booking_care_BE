
const express = require('express');
const router = express.Router();

const hospital = require('./hospital')
const doctorSite = require('./doctor-site')
const specialties  = require('./specialties')


router.use(hospital);
router.use(doctorSite);
router.use(specialties);
module.exports = router;
