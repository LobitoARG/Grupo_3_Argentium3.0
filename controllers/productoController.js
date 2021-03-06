const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');
const { traceDeprecation } = require('process');
const {validationResult} = require('express-validator');
const funciones = require('./funciones')


const productsFilePath = path.join(__dirname, '../src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productoController = {

    detailProduct: (req, res) => {
       //Necesito traer un producto por ID
        db.Producto.findByPk(req.params.id,{
                include: ['categoria_producto']
            })
            .then(resultadoPromesa => {
                    let ProductoEJS = resultadoPromesa;
                    console.log(resultadoPromesa);
                    let ComponentesEJS = JSON.parse(ProductoEJS.componentes);
                    let ComponentesEJSkeys = Object.keys(ComponentesEJS);   
                    let ComponentesEJSvalues = Object.values(ComponentesEJS);                                         
                    res.render('./products/detailProduct', {ProductoEJS, ComponentesEJSkeys, ComponentesEJSvalues});
            })
            // .catch(()=>{
            //     res.redirect('/products')
            // })                   
                       
    },

    productCart: (req, res) => res.render('./products/productCart'),
    // Create - Form to create
    createProduct: (req,res) => res.render('./products/createProduct'),//SELECCION DE CATEGORIA
 
    createProductpc_gamer: (req,res) => {
        res.render('products/createProduct-pc_gamer')
    },

    createProductnotebooks: (req,res) => {
        res.render('products/createProduct-notebooks')
    },

    createProductcomponentes: (req,res) => {
        res.render('products/createProduct-componentes')
    },
   
    
    store: (req,res) => {     
        let errores = validationResult(req);
		if (errores.isEmpty()) {
            let cmp = funciones.getComponentes(req.body);
            let cmpjson = JSON.stringify(cmp);
            let categid = funciones.getIdCategoria(req.body.category);

            db.Producto.create({        
            nombre: req.body.name,
            precio: req.body.price,
            descuento: req.body.discount,
            tipo: req.body.type,
            componentes: cmpjson,
            imagen: req.file.filename,
            descripcion: req.body.description,
            id_categoria_producto: categid
            });
             console.log(req.file.path)
            res.redirect('/')
        }
        else{         
            res.render('./products/createProduct-'+req.body.category, {errors: errores.array(), old: req.body});
    }
    


    },
        
    index: (req,res) => {
       
            db.Producto.findAll({
            include: ['categoria_producto']
            })
            .then(resultadoPromesa => {
            let ProductoEJS = resultadoPromesa;                                          
            res.render('./products/products', {ProductoEJS});
            })       
    },
     edit: (req, res) => {
		db.Producto.findByPk(req.params.id,{
            include: ['categoria_producto']
        })
        .then(resultadoPromesa => {
                let productoSeleccionado = resultadoPromesa;
                let ComponentesEJS = JSON.parse(productoSeleccionado.componentes);                
                let ComponentesEJSkeys = Object.keys(ComponentesEJS);
                let ComponentesEJSvalues = Object.values(ComponentesEJS);
                res.render('./products/editProduct', {productoSeleccionado, ComponentesEJSvalues, ComponentesEJSkeys})
        });
	},
    update: (req, res) => {
        let cmp = funciones.getComponentes(req.body);
        let cmpjson = JSON.stringify(cmp);
        let categid = funciones.getIdCategoria(req.body.category);

        db.Producto.update({
        nombre: req.body.name,
        precio: req.body.precio,
        descuento: req.body.discount,
        tipo: req.body.description,
        id_categoria_producto: categid,
        imagen: req.file.filename,
        componentes: cmpjson,     
        },
        
        {where: {id_producto: req.params.id}
        
        })


		res.redirect('/')
	},
    destroy : (req, res) => {
		// Do the magic
        db.Producto.destroy({
            where: {
                id_producto: req.params.id
            }
        });
        res.redirect('/');
	},

    searchProduct: (req, res) => {
        db.Producto.findAll({
            where: { nombre: {[Op.like]: `%${req.query.q}%`}},
            include: ['categoria_producto']            
            })
            .then(resultadoPromesa => {
            if(resultadoPromesa.length !== 0){
            let ProductoEJS = resultadoPromesa;                                       
            res.render('./products/searchProducts', {ProductoEJS});
            }
            else{
                res.render('./products/searchProducts', {sinProductos: 'No existen productos para esta b??squeda'});
            }
            })     



        // console.log(req.query.q);
        // res.render('./products/searchProducts', {busqueda: req.query.q})
    }

}

module.exports = productoController; 