const express = require("express");
const router = express.Router();
const AdminAppointments = require("../controllers/admin-appointment");

// Define routes

//Get all appointments
router.get(
  "/admin-appointments/list",
  AdminAppointments.getAllAppointmentsList
);
router.get(
  "/admin-appointments/appointment-by-day",
  AdminAppointments.getAllAppointmentsByDay
);

module.exports = router;
