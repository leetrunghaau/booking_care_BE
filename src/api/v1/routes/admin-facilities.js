const express = require("express");
const AdminFacilities = require("../controllers/admin-facilities");
const router = express.Router();

// Define routes

router.get("/admin-facility/facilities", AdminFacilities.getAllFacilities);
router.get("/admin-facility/facilities/:id", AdminFacilities.getFacilityById);

module.exports = router;
