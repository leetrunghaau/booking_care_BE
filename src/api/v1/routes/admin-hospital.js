const express = require("express");
const AdminHospital = require("../controllers/admin-hospital");
const router = express.Router();

// Define routes

router.get("/admin-hospital/hospitals", AdminHospital.getHospitals);
router.post("/admin-hospital/hospital", AdminHospital.upHospital);
router.delete("/admin-hospital/hospital/:id", AdminHospital.downHospital);

module.exports = router;
