const express = require("express");
const DoctorAppointment = require("../controllers/doctor-appointment");
const { authorization } = require("../middlewares/auth-middleware");
const { uploadFileWithSubPath } = require("../middlewares/upload-middleware");
const router = express.Router();

// Define routes

//Get all appointments
router.get(
  "/doctor-appointment/appointments",
  DoctorAppointment.getAllAppointments
);
//Get appointment by id
router.get(
  "/doctor-appointment/appointments/:id",
  DoctorAppointment.getAppointmentById
);

router.get(
  "/doctor-appointment/appointments/:id",
  DoctorAppointment.getAppointmentById
);
router.get("/doctor-appointment/by-day",authorization(["doctor"]) , DoctorAppointment.byDay);
router.get("/doctor-appointment/all",authorization(["doctor"]), DoctorAppointment.getAppointmentById);
router.get("/doctor-appointment/by-week",authorization(["doctor"]), DoctorAppointment.getAppointmentById);
router.get("/doctor-appointment/by-history",authorization(["doctor"]), DoctorAppointment.getAppointmentById);
router.post("/doctor-appointment/:id/update", uploadFileWithSubPath("file", "/appointment"), DoctorAppointment.upfile);
module.exports = router;
