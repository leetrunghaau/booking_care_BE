const express = require("express");
const DoctorDashboard = require("../controllers/doctor-dashborad");
const { authorization } = require("../middlewares/auth-middleware");
const DoctorSetting = require("../controllers/doctor-setting");
const router = express.Router();


router.post("/doctor-setting/re-pass",authorization(["doctor"]), DoctorSetting.rePass);
router.get("/doctor-setting/info",authorization(["doctor"]), DoctorSetting.getInfo);
router.post("/doctor-setting/info",authorization(["doctor"]), DoctorSetting.postInfo);

module.exports = router;
