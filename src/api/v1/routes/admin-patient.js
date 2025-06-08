const express = require("express");
const AdminPatient = require("../controllers/admin-patient");
const { authorization } = require("../middlewares/auth-middleware");
const router = express.Router();

// Define routes

router.get("/admin-patient/patients",authorization(["admin"]), AdminPatient.getPatinents);
router.post("/admin-patient/patient/:id/host-re-pass",authorization(["admin"]), AdminPatient.hotRePass);

module.exports = router;
