const express = require("express");
const DoctorSite = require("../controllers/doctor-site");
const Booking = require("../controllers/booking");
const router = express.Router();

// Define routes
router.get("/booking/symptoms", Booking.symptoms)
router.get("/booking/specialties", Booking.specialties)
// router.get("/booking/hospitals", Booking.hospitals)
router.get("/booking/addresses", Booking.addresses)
router.get("/booking/doctors", Booking.doctors)
router.get("/booking/doctor/:id", Booking.doctor)
router.get("/booking/doctor/:id/schedule/:date", Booking.doctorSchedule)




module.exports = router;
