const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');


// comp = {
//     Microprocesador:" descripCPU",
//     Cooler:" descripWC",
//     Motherboard:" descripMB",
//     Memoria:" descripRAM",
//     Disco:" descripSSD",
//     Fuente:" descripPWS",
//     Video:" descripGPU",
//     Gabinete:" descripGA"
// };
// compJSON = JSON.stringify(comp)

// console.log(compJSON);

// db.Producto.findAll({
//     include: ['categoria_producto']
// })
// .then(resultadoPromesa => {
//     var ProductoEJS = resultadoPromesa;   
//     for (let i = 0; i < ProductoEJS.length; i++) {
    
//         console.log(JSON.parse(ProductoEJS[i].componentes));
//     }
// });



     db.Producto.findByPk(1,{
        include: ['categoria_producto']
    })
    .then(resultadoPromesa => {
            let productoSeleccionado = resultadoPromesa;
            let ComponentesEJS = JSON.parse(productoSeleccionado.componentes);
            let ComponentesEJSkeys = productoSeleccionado._options.attributes;  
            console.log(ComponentesEJS);
        });












    // db.Producto.findAll({
    //         include: ['categoria_producto']
    //     })
    //     .then(resultadoPromesa => {
    //         let ProductoEJS = resultadoPromesa;            
    //         for (let i = 0; i< ProductoEJS.length; i++) {
              
    //         console.log(ProductoEJS[i].descripcion);   
    //         console.log(ProductoEJS[i].precio);  
    //         console.log(ProductoEJS[i].categoria_producto.titulo_categoria)            
    //         }
    //      });


        // //Necesito traer un producto por ID
        // db.Producto.findByPk(150,{
        //     include: ['categoria_producto']
        // })
        // .then(resultadoPromesa => {
        //         let ProductoEJS = resultadoPromesa;
                
        //         if(ProductoEJS.componentes == null){
        //         console.log(ProductoEJS);
        //         }
        //         else{                  
        //         let ComponentesEJS = JSON.parse(ProductoEJS.componentes);
        //         let ComponentesEJSkeys = Object.keys(ComponentesEJS);   
        //         let ComponentesEJSvalues = Object.values(ComponentesEJS);                           
        //         console.log(ProductoEJS, ComponentesEJSkeys, ComponentesEJSvalues); 
        //         }       
                
        //     })





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