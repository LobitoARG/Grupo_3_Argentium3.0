const express = require('express');

const productoController = {

    detailProduct: (req, res) => res.render('./products/detailProduct'),
    productCart: (req, res) => res.render('./products/productCart')

}

module.exports = productoController; 