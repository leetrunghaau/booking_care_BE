const express = require('express');
const Sig = require('../controllers/sig');
const { authorization } = require('../middlewares/auth-middleware');
const router = express.Router();

// Define routes
router.post("/sig/login",Sig.login);
router.get("/sig/info", authorization(['patient', 'doctor', 'admin']), Sig.info);
router.post("/sig/signup",  Sig.sigUp);
router.post("/sig/forgot-pass",  Sig.forgotPass);
router.post("/sig/new-pass",  Sig.newPass);


module.exports = router;