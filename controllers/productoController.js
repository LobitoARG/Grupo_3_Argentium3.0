const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');


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
    createProduct: (req,res) => res.render('./products/createProduct'),
   
    // Create - Metodo para crear el producto en el JSON
    store: (req,res) => {

        let productosActuales = fs.readFileSync(productsFilePath, 'utf-8')
		productosActuales = JSON.parse(productosActuales)
		let newProduct = req.body;
       	//newProduct.image = req.file.filename; (DESCOMENTAR CUANDO ESTÉ IMPLEMENTADO EL CAMPO FILE EN EL EJS Y EL MULTER)
		let ultimoIndice = productosActuales.length+1;
		newProduct.id = ultimoIndice;
		productosActuales.push(newProduct)
		let newProductoJSON = JSON.stringify(productosActuales)
		//const nuevaVariableJSON = JSON.stringify(newProduct)
		fs.writeFileSync(productsFilePath, newProductoJSON)
		//products.push(newProductoJSON);
		res.redirect('/')
    },
    
    editProduct: (req,res) => res.render('./products/editProduct'),
    
    index: (req,res) => res.render('products/products',{products}),

    createProductPC: (req,res) => {
        res.render('products/createProduct-PC')
    },

    createProductntbk: (req,res) => {
        res.render('products/createProduct-ntbk')
    },

    createProductcomp: (req,res) => {
        res.render('products/createProduct-comp')
    },
    edit: (req, res) => {
		let idProducto = req.params.id;
		//console.log (idProducto);
		res.render('products/editProduct',{"productoSeleccionado": products[idProducto-1]});

	},
    update: (req, res) => {
		
		let id = req.params.id;
		let infoForm=req.body;
        /*
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
        console.log(id)
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
		console.log(infoForm)
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')*/
        
		products.forEach(function (elemento){
			if (elemento.id == id)
			{
				elemento.name = infoForm.name;
                if (infoForm.descripCPU != null)
                {
                    elemento.descripCPU = infoForm.descripCPU;
                }

                if (infoForm.descripWC != null)
                {
                    elemento.descripWC = infoForm.descripWC;
                }
                
                if (infoForm.descripMB != null)
                {
                    elemento.descripMB = infoForm.descripMB;
                }

                if (infoForm.descripRAM != null)
                {
                    elemento.descripRAM = infoForm.descripRAM;
                }

                if (infoForm.descripSSD != null)
                {
                    elemento.descripSSD = infoForm.descripSSD;
                }

                if (infoForm.descripGPU != null)
                {
                    elemento.descripGPU = infoForm.descripGPU;
                }

                if (infoForm.descripPWS != null)
                {
                    elemento.descripPWS = infoForm.descripPWS;
                }

                if (infoForm.descripGAB != null)
                {
                    elemento.descripGAB = infoForm.descripGAB;
                }
				elemento.description = infoForm.description;
                elemento.price = infoForm.price;
				elemento.discount = infoForm.discount;
			}
		})
	
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
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