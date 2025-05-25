const express = require("express");
const router = express.Router();
const AdminActivities = require("../controllers/admin-activity");

// Define routes

//Get all appointments
router.get("/admin-activity/activities", AdminActivities.getAllActivities);

module.exports = router;
