const express = require("express");
const AI = require("../../controllers/chat/handler");
const router = express.Router();

// Define routes

//Get all appointments
router.post("/AI/chat", AI.chat);

module.exports = router;
