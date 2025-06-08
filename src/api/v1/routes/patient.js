const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const Patient = require('../controllers/patient');
const { uploadSingleFileWithSubPath } = require('../middlewares/upload-middleware');
const PatientBooking = require('../controllers/patient-booking');
const PatientRecord = require('../controllers/patient-record');
const PatientNotification = require('../controllers/patient-notification');
const router = express.Router();

// Define routes
router.get("/patient-bookings",authorization(["patient"]), PatientBooking.all);
router.get("/patient-booking/:id",authorization(["patient"]), PatientBooking.one);
router.delete("/patient-booking/:id/cancel",authorization(["patient"]), PatientBooking.cancel);

router.get("/patient/records", authorization(["patient"]), PatientRecord.all);
router.get("/patient/notifications", authorization(["patient"]), PatientNotification.all);
router.get("/patient/notification/:id", authorization(["patient"]), PatientNotification.one);
router.get("/patient/info", authorization(["patient"]), Patient.info);
router.get("/patient/my-info", authorization(["patient"]), Patient.myInfo);
router.post("/patient/info", authorization(["patient"]), Patient.upInfo);
router.post("/patient/avatar", authorization(["patient"]), uploadSingleFileWithSubPath("file", "avatar"), Patient.upAvata);
router.delete("/patient/avatar", authorization(["patient"]),  Patient.downAvata);
router.post("/patient/re-password", authorization(["patient"]),  Patient.newPass);
router.delete("/patient/user", authorization(["patient"]),  Patient.deleteAcc);
module.exports = router;