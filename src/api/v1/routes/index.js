const express = require("express");
const router = express.Router();

const f = require("./fake-data");
// Import routes
const hospital = require("./hospital");
const doctorSite = require("./doctor-site");
const specialties = require("./specialties");
const doctorAppointment = require("./doctor-appointment");
const doctorFAQ = require("./doctor-faq");
const DoctorRating = require("./doctor-rating");
const DoctorSchedule = require("./doctor-schedule");
const home  = require('./home')
const booking = require('./booking')

router.use(f);
// Define routes
router.use(hospital);
router.use(doctorSite);
router.use(specialties);
router.use(doctorAppointment);
router.use(doctorFAQ);
router.use(DoctorRating);
router.use(DoctorSchedule);
router.use(home);
router.use(booking)

module.exports = router;
