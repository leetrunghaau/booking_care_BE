const express = require("express");
const DoctorNotification = require("../controllers/doctor-notifications");
const { authorization } = require("../middlewares/auth-middleware");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/doctor-notifications", authorization(["doctor"]), DoctorNotification.all);
router.get("/doctor-notification/:id", authorization(["doctor"]), DoctorNotification.one);

module.exports = router;
