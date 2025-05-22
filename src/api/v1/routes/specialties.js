// addressRoutes.js

const express = require('express');
const Specialties = require('../controllers/specialties');
const router = express.Router();

// Define routes
router.get("/specialties",Specialties.all);
router.get("/specialty/:slug",Specialties.oneBySlug);


module.exports = router;