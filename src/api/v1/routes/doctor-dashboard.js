const express = require("express");
const DoctorDashboard = require("../controllers/doctor-dashborad");
const router = express.Router();


router.get("/doctor-dashboard/faqs", DoctorDashboard.sumBooking);

module.exports = router;
