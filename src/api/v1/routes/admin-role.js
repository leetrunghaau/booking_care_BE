const express = require("express");
const AdminRoles = require("../controllers/admin-role");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/admin-role/roles", AdminRoles.getAllRoles);

module.exports = router;
