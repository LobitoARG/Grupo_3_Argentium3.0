const express = require('express');
const router = express.Router(); 
const path = require('path')
const mainRoute = require(path.join(__dirname, '/mainRoute'));
const productoRoute = require(path.join(__dirname, '/productoRoute'));
const userRoute = require(path.join(__dirname, '/userRoute'));
const productoApiRoute = require('./api/productoApiRoute')
const userApiRoute = require('./api/userApiRoute')
 



router.use(mainRoute);
router.use('/products',productoRoute);
router.use('/user', userRoute);

//RutasApi
router.use('/api/products', productoApiRoute);
router.use('/api/user', userApiRoute)

module.exports = router; 