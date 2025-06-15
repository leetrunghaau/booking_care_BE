const express = require('express');
const MedicineDetails = require('../controllers/medicine-details');
const router = express.Router();

// Define routes
router.get("/medicine-details", MedicineDetails.search);


module.exports = router;