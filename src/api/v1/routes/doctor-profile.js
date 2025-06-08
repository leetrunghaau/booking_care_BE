const express = require("express");
const { authorization } = require("../middlewares/auth-middleware");
const DoctorProfile = require("../controllers/doctor-profile");
const router = express.Router();


router.get("/doctor-profile/profile",authorization(["doctor"]), DoctorProfile.getProfile);

module.exports = router;
