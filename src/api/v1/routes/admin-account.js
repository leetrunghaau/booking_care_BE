const express = require("express");
const AdminAccount = require("../controllers/admin-account");
const router = express.Router();

// Define routes

//Get all appointments
router.get("/admin-account/accounts", AdminAccount.getAllAccounts);

module.exports = router;
