const express = require("express");
const AdminPatient = require("../controllers/admin-patient");
const router = express.Router();

// Define routes

router.get("/admin-patient/patients", AdminPatient.getPatinents);

module.exports = router;
