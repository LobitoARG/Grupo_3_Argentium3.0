const express = require('express');

const productoController = {

    detailProduct: (req, res) => res.render('./products/detailProduct'),
    productCart: (req, res) => res.render('./products/productCart'),
    createProduct: (req,res) => res.render('./products/createProduct'),
    editProduct: (req,res) => res.render('./products/editProduct')

}

module.exports = productoController; 