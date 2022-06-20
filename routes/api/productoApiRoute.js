const express = require('express');
const router = express.Router();
const productoApiController = require('../../controllers/api/productoApiController');
const path = require('path');
const multer = require('multer');
const { check } = require('express-validator')

router.get('/', productoApiController.productIndexApi);
router.get('/detailProduct/:id', productoApiController.productDetailApi);
router.get('/countByCategory', productoApiController.countByCategory);
router.get('/lastProduct', productoApiController.lastProduct)

module.exports = router;