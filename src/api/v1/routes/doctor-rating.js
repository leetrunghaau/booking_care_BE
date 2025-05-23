const express = require("express");
const DoctorRating = require("../controllers/doctor-rating");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/doctor-rating/ratings", DoctorRating.getRatingData);

module.exports = router;
