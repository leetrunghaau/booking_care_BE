
const express = require('express');
const FData = require('../controllers/d');
const router = express.Router();

router.get("/fake/:id",FData.generate);
router.get("/fa",FData.generateAll);


module.exports = router;