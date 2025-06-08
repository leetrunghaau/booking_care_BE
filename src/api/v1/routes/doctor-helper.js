const express = require("express");
const DoctorHeper = require("../controllers/doctor-helper");
const { authorization } = require("../middlewares/auth-middleware");
const router = express.Router();


router.get("/doctor-helper/header",authorization(["doctor"]), DoctorHeper.header);

module.exports = router;
