const express = require("express");
const DoctorFAQ = require("../controllers/doctor-faq");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/doctor-faq/faqs", DoctorFAQ.getAllFAQ);

module.exports = router;
