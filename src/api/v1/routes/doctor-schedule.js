const express = require("express");
const router = express.Router();
const DoctorSchedule = require("../controllers/doctor-schedule");

// Define routes

router.get("/doctor-schedule/by-day", DoctorSchedule.getScheduleByDay);

module.exports = router;
