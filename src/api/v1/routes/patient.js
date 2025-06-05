const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const Patient = require('../controllers/patient');
const router = express.Router();

// Define routes
router.post("/patient/info",authorization(["patient"]), Patient.info);


module.exports = router;