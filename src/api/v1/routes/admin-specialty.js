const express = require("express");
const AdminSpecialty = require("../controllers/admin-specialty");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/admin-specialties", AdminSpecialty.getAllSpecialties);

module.exports = router;
