
const express = require('express');
const router = express.Router();

const hospital = require('./hospital')
const doctorSite = require('./doctor-site')
const specialties  = require('./specialties')
const home  = require('./home')


router.use(hospital);
router.use(doctorSite);
router.use(specialties);
router.use(home);
module.exports = router;
