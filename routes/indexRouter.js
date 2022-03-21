const express = require('express');
const router = express.Router(); 
const path = require('path')
const mainRoute = require(path.join(__dirname, '/mainRoute'));
const productoRoute = require(path.join(__dirname, '/productoRoute'));



router.use(mainRoute);
router.use('/products',productoRoute);

module.exports = router; 