const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');
const path = require('path');
const multer = require('multer');
const { check } = require('express-validator')

router.get('/', userApiController.userIndexApi)
router.get('/detailUser/:id', userApiController.userDetailApi);
router.get('/lastUser', userApiController.lastUser);    

module.exports = router;