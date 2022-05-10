const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');
const { traceDeprecation } = require('process');


const productsFilePath = path.join(__dirname, '../src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//FUNCIONES

function getIdCategoria (param) {
    if (param == 'pc_gamer'){
        return 1;
    }
    else if (param == 'notebooks'){
        return 2;
    }
    else{
        return 3;
    }
}

function getComponentes (param){  
                    
    var components = new Object();
    if (param.descripCPU){
        components.Microprocesador = miobjeto.descripCPU;
    }

    if(param.descripWC){
        components.Cooler = miobjeto.descripWC;
    }

    if(param.descripMB){
        components.Motherboard = miobjeto.descripMB;
    }

    if(param.descripRAM){
        components.RAM = miobjeto.descripRAM;
    }

    if(param.descripSSD){
        components.Disco = miobjeto.descripSSD;
    }        

    if(param.descripPWS){
        components.Fuente = miobjeto.descripPWS;
    }
    
    if(param.descripGPU){
        components.Video = miobjeto.descripGPU;
    }   

    if(param.descripGAB){
        components.Gabinete = miobjeto.descripGAB;
    }

    if(param.componente){
        components.Componente = miobjeto.componente;
    }
    return components;       
  }







const productoController = {

    detailProduct: (req, res) => {
       //Necesito traer un producto por ID
        db.Producto.findByPk(req.params.id,{
                include: ['categoria_producto']
            })
            .then(resultadoPromesa => {
                    let ProductoEJS = resultadoPromesa;
                    
                    if(ProductoEJS.componentes == null){
                    res.render('./products/detailProduct', {ProductoEJS});
                    }
                    else{                  
                    let ComponentesEJS = JSON.parse(ProductoEJS.componentes);
                    let ComponentesEJSkeys = Object.keys(ComponentesEJS);   
                    let ComponentesEJSvalues = Object.values(ComponentesEJS);                           
                    res.render('./products/detailProduct', {ProductoEJS, ComponentesEJSkeys, ComponentesEJSvalues});
                    }        
                    
                })       
    },

    productCart: (req, res) => res.render('./products/productCart'),
    // Create - Form to create
    createProduct: (req,res) => res.render('./products/createProduct'),//SELECCION DE CATEGORIA
 
    createProductPC: (req,res) => {
        res.render('products/createProduct-PC')
    },

    createProductntbk: (req,res) => {
        res.render('products/createProduct-ntbk')
    },

    createProductcomp: (req,res) => {
        res.render('products/createProduct-comp')
    },
   
    // Create - Metodo para crear el producto en el JSON
    store: (req,res) => {
        let cmp = getComponentes(req.body);
        let cmpjson = JSON.stringify(cmp);
        let categid = getIdCategoria(req.body.category);
        

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

        res.redirect('/')
    },
        
    index: (req,res) => {
       //Necesito traer todos los productos para que se muestren en el home. 
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
        let cmp = getComponentes(req.body);
        let cmpjson = JSON.stringify(cmp);
        let categid = getIdCategoria(req.body.category);

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
		let idProducto = req.params.id;
		
		const nuevoProducto = products.filter(function(producto){
			return producto.id != idProducto;
		})
		//console.log (nuevoProducto)

		fs.writeFileSync(productsFilePath,JSON.stringify(nuevoProducto))

		res.redirect('/')

	}
}

module.exports = productoController; 