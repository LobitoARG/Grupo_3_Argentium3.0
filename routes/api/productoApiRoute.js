const express = require('express');
const router = express.Router();
const productoApiController = require('../../controllers/api/productoApiController');
const path = require('path');
const multer = require('multer');
const { check } = require('express-validator')

router.get('/', productoApiController.productIndexApi);
router.get('/:id', productoApiController.productDetailApi);

module.exports = router;