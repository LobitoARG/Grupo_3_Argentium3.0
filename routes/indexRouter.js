const express = require('express');
const router = express.Router(); 
const path = require('path')
const mainRoute = require(path.join(__dirname, '/mainRoute'));
const productoRoute = require(path.join(__dirname, '/productoRoute'));
const userRoute = require(path.join(__dirname, '/userRoute'));



router.use(mainRoute);
router.use('/products',productoRoute);
router.use('/user', userRoute);

module.exports = router; 