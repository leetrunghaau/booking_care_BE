const express = require("express");
const router = express.Router();

// const f = require("./fake-data");
// Import routes
const hospital = require("./hospital");
const doctorSite = require("./doctor-site");
const specialties = require("./specialties");
const doctorAppointment = require("./doctor-appointment");
const doctorFAQ = require("./doctor-faq");
const DoctorRating = require("./doctor-rating");
const DoctorSchedule = require("./doctor-schedule");
const DoctorNotification = require("./doctor-notification");
const home = require("./home");
const adminAccount = require("./admin-account");
const adminRole = require("./admin-role");
const adminActivities = require("./admin-activity");
const adminAppointments = require("./admin-appointment");
const adminDoctors = require("./admin-doctor");
const AdminHospital = require("./admin-hospital");
const AdminSpecialties = require("./admin-specialty");
const AdminUsers = require("./admin-user");
const booking = require('./booking')
const sig = require('./sig')
const patient = require('./patient')
const doctorHelper = require('./doctor-helper')
const doctorSeting = require('./doctor-setting')
const doctorProfile = require('./doctor-profile')
const adminPatient = require('./admin-patient')
const test = require('./test')
const chat = require('./chat/test')

// router.use(f);
// Define routes
router.use(test);


router.use(hospital);
router.use(doctorSite);
router.use(specialties);
router.use(doctorAppointment);
router.use(doctorFAQ);
router.use(DoctorRating);
router.use(DoctorSchedule);
router.use(DoctorNotification);
router.use(home);
router.use(adminAccount);
router.use(adminRole);
router.use(adminActivities);
router.use(adminAppointments);
router.use(adminDoctors);
router.use(AdminHospital);
router.use(AdminSpecialties);
router.use(AdminUsers);
router.use(booking)
router.use(sig)
router.use(patient)
router.use(doctorHelper )
router.use(doctorSeting )
router.use(doctorProfile )
router.use(adminPatient )
router.use(chat )

module.exports = router;
