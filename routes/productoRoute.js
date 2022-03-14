const express = require('express');
const productoController = require('../controllers/productoController');
const path = require('path');
const multer = require('multer');

const router = express.Router();

/*** OBTENER 1 PRODUCTO ***/ 
router.get('/detailProduct/:id', productoController.detailProduct);

/*** CART DE 1 PRODUCTO ***/ 
router.get('/productCart', productoController.productCart);

/*** CREAR UN PRODUCTO PRODUCTO ***/ 
router.get('/create', productoController.createProduct);


/*** EDITAR UN PRODUCTO ***/ 
router.get('/editProduct', productoController.editProduct);

/*** GET ALL PRODUCTS ***/ 
router.get('/', productoController.index);


module.exports = router; 