const express = require("express");
const router = express.Router();
const AdminDoctors = require("../controllers/admin-doctor");

// Define routes

router.get("/admin-doctor/available", AdminDoctors.getAvailableDoctors);
router.get("/admin-doctor/pending", AdminDoctors.getPendingDoctors);

module.exports = router;
