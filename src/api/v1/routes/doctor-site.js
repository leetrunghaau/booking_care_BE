const express = require("express");
const DoctorSite = require("../controllers/doctor-site");
const router = express.Router();

// Define routes
router.get("/doctor-site/address",DoctorSite.address);
router.get("/doctor-site/specialties",DoctorSite.spesialties);
router.get("/doctor-site/doctors",DoctorSite.all);
router.get("/doctor-site/doctor/:slug",DoctorSite.one);
router.get("/doctor-site/doctor/:id/about",DoctorSite.doctorAbout);
router.get("/doctor-site/doctor/:id/experience",DoctorSite.doctorExperience);
router.get("/doctor-site/doctor/:id/review",DoctorSite.doctorReview);
router.post("/doctor-site/doctor/:id/rating",DoctorSite.doctorRating);
router.get("/doctor-site/doctor/:id/faqs",DoctorSite.doctorFaqs);
router.get("/doctor-site/doctor/:id/hospital",DoctorSite.doctorHospital);
router.get("/doctor-site/doctor/:id/schedule/:day",DoctorSite.doctorSchedule);


module.exports = router;
