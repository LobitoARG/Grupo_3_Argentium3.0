const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');


    db.Producto.findAll({
            include: ['categoria_producto']
        })
        .then(resultadoPromesa => {
            let ProductoEJS = resultadoPromesa;            
            for (let i = 0; i< ProductoEJS.length; i++) {
              
            console.log(ProductoEJS[i].descripcion);   
            console.log(ProductoEJS[i].precio);  
            console.log(ProductoEJS[i].categoria_producto.titulo_categoria)            
            }
         });




// const usersFilePath = path.join(__dirname, '../src/data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
 // var sales = [];        
        // for (let i = 0; i < products.length; i++) {
        //     const element = products[i];            
        //     if (element.type == 'SALE'){
        //         sales.push(element);
        //     }            
        // }

        // var discounts = products.sort(function(a, b) {return b.discount-a.discount});
      
        // var news = [];
        // for (let i = 0; i < products.length; i++) {
        //     const element = products[i];            
        //     if (element.type == 'NEW'){
        //         news.push(element);
        //     }            
        // }
      
      
        // res.render('./users/home', {sales, discounts, news});