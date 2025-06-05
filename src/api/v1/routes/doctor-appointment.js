const express = require("express");
const { authorization } = require("../middlewares/auth-middleware");
const { uploadFileWithSubPath } = require("../middlewares/upload-middleware");
const DoctorAppointment = require("../controllers/doctor-appointment");
const router = express.Router();


//Get appointment by id
router.get("/doctor-appointment/appointment/:id",authorization(["doctor"]), DoctorAppointment.getAppointmentById);
// router.get("/doctor-appointment/patient/:id",authorization(["doctor"]), DoctorAppointment.patient);
router.get("/doctor-appointment/patient/booking/:id",authorization(["doctor"]), DoctorAppointment.patient);
router.get("/doctor-appointment/patient/record/:id",authorization(["doctor"]), DoctorAppointment.patientRecord);
router.get("/doctor-appointment/patient/history/:bookingId",authorization(["doctor"]), DoctorAppointment.patientHistory);
router.get("/doctor-appointment/booking-info/:id",authorization(["doctor"]), DoctorAppointment.bookingInfo);
router.get("/doctor-appointment/examination/:id",authorization(["doctor"]), DoctorAppointment.getExamination);
router.post("/doctor-appointment/examination/:id",authorization(["doctor"]), DoctorAppointment.postExamination);
router.get("/doctor-appointment/my-schedule/:date",authorization(["doctor"]), DoctorAppointment.doctorSchedule);
router.get("/doctor-appointment/prescription/:bookingId",authorization(["doctor"]), DoctorAppointment.getPrescription);
router.post("/doctor-appointment/prescription/:bookingId",authorization(["doctor"]), DoctorAppointment.postPrescription);
router.get("/doctor-appointment/prescription-info/:bookingId",authorization(["doctor"]), DoctorAppointment.prescriptionInfo);

router.get("/doctor-appointments/by-day", authorization(["doctor"]), DoctorAppointment.byDay);
router.get("/doctor-appointments/by-week", authorization(["doctor"]), DoctorAppointment.byWeek);
router.get("/doctor-appointments/by-history", authorization(["doctor"]), DoctorAppointment.byHistory);
router.get("/doctor-appointments/by-all", authorization(["doctor"]), DoctorAppointment.byAll);
router.get("/doctor-appointment/:id/status", authorization(["doctor"]), DoctorAppointment.getStatus);
router.post("/doctor-appointment/:id/status", authorization(["doctor"]), DoctorAppointment.updateStatus);
router.post("/doctor-appointment/:id/update", uploadFileWithSubPath("file", "/appointment"), DoctorAppointment.upfile);

module.exports = router;
