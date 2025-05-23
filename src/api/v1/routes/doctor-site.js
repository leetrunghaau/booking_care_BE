const express = require("express");
const DoctorSite = require("../controllers/doctor-site");
const router = express.Router();

// Define routes
router.get("/doctor-site/address",DoctorSite.address);
router.get("/doctor-site/specialties",DoctorSite.spesialties);
router.get("/doctor-site/doctors",DoctorSite.doctors);
router.get("/doctor-site/doctor/:slug/about",DoctorSite.doctorAbout);
router.get("/doctor-site/doctor/:slug/experience",DoctorSite.doctorExperience);
router.get("/doctor-site/doctor/:slug/review",DoctorSite.doctorReview);
router.post("/doctor-site/doctor/:slug/rating",DoctorSite.doctorRating);
router.get("/doctor-site/doctor/:slug/faqs",DoctorSite.doctorFaqs);


module.exports = router;
