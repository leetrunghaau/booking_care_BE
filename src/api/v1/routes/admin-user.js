const express = require("express");
const AdminUsers = require("../controllers/admin-user");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/admin-users/users", AdminUsers.getAllUsers);

module.exports = router;
