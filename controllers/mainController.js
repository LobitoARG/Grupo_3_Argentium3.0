const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');

const mainController = {
    home: (req, res) => {
       db.Producto.findAll({
            include: ['categoria_producto']
        })
        .then(resultadoPromesa => {
            let ProductoEJS = resultadoPromesa;
            res.render('./users/home', {ProductoEJS});
        })       
    },
    contacto: (req,res) =>{
        res.render('./users/contacto')
    },
    terminos: (req,res)=>{
        res.render('./users/terminos')
    }
}

module.exports = mainController;