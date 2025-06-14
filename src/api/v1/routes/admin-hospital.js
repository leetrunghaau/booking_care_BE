const express = require("express");
const AdminHospital = require("../controllers/admin-hospital");
const { uploadSingleFileWithSubPath, uploadMultipleFilesWithSubPath } = require("../middlewares/upload-middleware");
const router = express.Router();

// Define routes

router.get("/admin-hospital/hospitals", AdminHospital.getHospitals);
router.post("/admin-hospital/hospital", AdminHospital.upHospital);
router.delete("/admin-hospital/hospital/:id", AdminHospital.downHospital);
router.get("/admin-hospital/basic-hospital/:id", AdminHospital.getBasic);
router.post("/admin-hospital/basic-hospital/:id", AdminHospital.editBasic);
router.get("/admin-hospital/basic-hospital/:id/doctors", AdminHospital.getDoctorsNoHospital);
router.get("/admin-hospital/basic-hospital/:id/doctors/base", AdminHospital.getDoctorBase);
router.post("/admin-hospital/basic-hospital/:id/doctors", AdminHospital.setDoctorsToHospital);
router.post("/admin-hospital/basic-hospital/:id/img", uploadSingleFileWithSubPath("file", "hospital"), AdminHospital.upimage);
router.post("/admin-hospital/basic-hospital/:id/imgs", uploadMultipleFilesWithSubPath("files", "hospital/gallery"), AdminHospital.upImgs);
router.delete("/admin-hospital/basic-hospital/:id/img", AdminHospital.downImg);
router.get("/admin-hospital/img-hospital/hospital/:id", AdminHospital.getImgs);
router.get("/admin-hospital/specialties-sevices/hospital/:id", AdminHospital.initHospialSpecialtiesASevices);
router.post("/admin-hospital/specialties-sevices/hospital/:id", AdminHospital.saveSpecialtiesAService);
router.get("/admin-hospital/specialties", AdminHospital.getSpecialties);


module.exports = router;
