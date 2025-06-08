const express = require("express");
const router = express.Router();
const DoctorSchedule = require("../controllers/doctor-schedule");
const { authorization } = require("../middlewares/auth-middleware");

// Define routes

router.get("/doctor-schedule/setting",authorization(["doctor"]), DoctorSchedule.getScheduleSettings);
router.get("/doctor-schedule/templates",authorization(["doctor"]), DoctorSchedule.getTemplates);
router.post("/doctor-schedule/setting",authorization(["doctor"]), DoctorSchedule.updateScheduleSettings);
router.post("/doctor-schedule/apply",authorization(["doctor"]), DoctorSchedule.applyTemplates);
router.get("/doctor-schedule/by-day/:date",authorization(["doctor"]), DoctorSchedule.getScheduleByDay);
router.get("/doctor-schedule/working-days",authorization(["doctor"]), DoctorSchedule.getWorkingDays);
router.post("/doctor-schedule/time-slots",authorization(["doctor"]), DoctorSchedule.toggleTimeSlots);
router.get("/doctor-schedule/booking/:id",authorization(["doctor"]), DoctorSchedule.getBookingById);
router.get("/doctor-schedule/info",authorization(["doctor"]), DoctorSchedule.info);

module.exports = router;
