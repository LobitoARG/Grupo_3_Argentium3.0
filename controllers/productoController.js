const express = require('express');
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productoController = {

    detailProduct: (req, res) => {
        let idProducto = req.params.id;
        res.render('./products/detailProduct', {"productoSeleccionado": products[idProducto-1]});
    },

    productCart: (req, res) => res.render('./products/productCart'),
    // Create - Form to create
    createProduct: (req,res) => res.render('./products/createProduct'),
    // Create - Metodo para crear el producto en el JSON
    store: (req,res) => {

    },
    editProduct: (req,res) => res.render('./products/editProduct'),
    index: (req,res) => res.render('products/products',{products})

}

module.exports = productoController; 