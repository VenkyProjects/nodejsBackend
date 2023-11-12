const express = require('express');
const router = express.Router();
const portfolioDataController=require('../controllers/portfolioDataController');

router.post('/',portfolioDataController.addData);

module.exports = router;
