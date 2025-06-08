const express = require("express");
const DoctorSite = require("../controllers/doctor-site");
const { authorization } = require("../middlewares/auth-middleware");
const router = express.Router();

// Define routes
router.get("/doctor-site/address",DoctorSite.addresses);
router.get("/doctor-site/specialties",DoctorSite.spesialties);
router.get("/doctor-site/doctors",DoctorSite.all);
router.get("/doctor-site/doctor/:slug",DoctorSite.oneBySlug);
router.get("/doctor-site/doctor/:slug/rating",DoctorSite.rating);
router.get("/doctor-site/doctor/:slug/working-days",DoctorSite.getWorkingDays);
router.post("/doctor-site/doctor/:slug/rating",authorization(["patient"]), DoctorSite.potsRating);
router.get("/doctor-site/doctor/:slug/can-rating",DoctorSite.canRating);
router.get("/doctor-site/doctor/:slug/ratings/:len",DoctorSite.ratings);
router.get("/doctor-site/doctor/:slug/hospital",DoctorSite.doctorHospital);
router.get("/doctor-site/doctor/:slug/schedule/info",DoctorSite.doctorScheduleInfo);
router.get("/doctor-site/doctor/:slug/schedule/:day",DoctorSite.doctorSchedule);


module.exports = router;
