const express = require('express');
const productoController = require('../controllers/productoController');

const router = express.Router();


router.get('/detailProduct', productoController.detailProduct);
router.get('/productCart', productoController.productCart);


module.exports = router; 