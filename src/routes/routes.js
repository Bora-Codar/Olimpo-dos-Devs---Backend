const express = require('express');
const testController = require('../controllers/testeController');
const router = express.Router();

router.get('/', testController.index);

module.exports = router;