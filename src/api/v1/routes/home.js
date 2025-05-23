
const express = require('express');
const Home = require('../controllers/home');
const router = express.Router();

router.get("/home/doctors",Home.doctors);
router.get("/home/specialties",Home.specialties);


module.exports = router;