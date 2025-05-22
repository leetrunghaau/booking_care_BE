const express = require("express");
const DoctorSite = require("../controllers/doctor-site");
const router = express.Router();

// Define routes
router.get("/doctor-site/address", DoctorSite.address);
router.get("/doctor-site/specialties", DoctorSite.spesialties);
router.get("/doctor-site/doctors", DoctorSite.doctors);

module.exports = router;
