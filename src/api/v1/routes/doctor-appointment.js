const express = require("express");
const DoctorAppointment = require("../controllers/doctor-appointment");
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

module.exports = router;
