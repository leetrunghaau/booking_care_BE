const express = require("express");
const router = express.Router();
const AdminDoctors = require("../controllers/admin-doctor");
const { authorization } = require("../middlewares/auth-middleware");
const { uploadSingleFileWithSubPath } = require("../middlewares/upload-middleware");

// Define routes

router.get("/admin-doctor/doctors", authorization(["admin"]), AdminDoctors.getDoctors);
router.get("/admin-doctor/base", authorization(["admin"]), AdminDoctors.getBase);
router.delete("/admin-doctor/doctors/:id", authorization(["admin"]), AdminDoctors.downDoctor);
router.post("/admin-doctor/doctor", authorization(["admin"]), AdminDoctors.upDoctor);
router.post("/admin-doctor/doctor/:id/avatar", authorization(["admin"]), uploadSingleFileWithSubPath("file", "doctor"), AdminDoctors.upAvata);
router.get("/admin-doctor/doctor/full-hospital", authorization(["admin"]), AdminDoctors.getFullHospital);
router.get("/admin-doctor/doctor/full-specialty", authorization(["admin"]), AdminDoctors.getFullSpecialty);
router.get("/admin-doctor/doctor/:id/general-info", authorization(["admin"]), AdminDoctors.getDoctorGeneralInfo);
router.post("/admin-doctor/doctor/:id/general-info", authorization(["admin"]), AdminDoctors.postDoctorGeneralInfo);
router.post("/admin-doctor/doctor/:id/general-info/img", authorization(["admin"]), uploadSingleFileWithSubPath("file", "doctor"), AdminDoctors.postImg);
router.get("/admin-doctor/doctor/:id/schedule", authorization(["admin"]), AdminDoctors.getScheduleSettings);
router.post("/admin-doctor/doctor/:id/schedule", authorization(["admin"]),  AdminDoctors.updateScheduleSettings);

module.exports = router;
