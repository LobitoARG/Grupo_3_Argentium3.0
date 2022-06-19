const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require('../../src/database/models');
const sequelize = require('../../src/database/config/config')
const funciones = require('../funciones');


const productoApiController = {   
    productIndexApi: (req,res) => {   
         
        let lim = parseInt(req.query.limit);
        let pag = parseInt(req.query.page);
        let prevPage = '';
        let nextPage = '';
        let urljson = '';
        let urlApiProduct = '/api/products';
        let queryPage = 'page=';
        let pagQueryValue = parseInt(req.query.page);
        let queryLim = '?limit=';
        
              
        if (!pag || pagQueryValue == 1 || !lim){
            pag = 0;
            lim = 10;
            queryLim += lim;
            urljson = urlApiProduct + queryLim    
            prevPage = 'Estás en la primera página';
            pagQueryValue = 1;
            
        }
        else {
            pag--;
            queryLim += lim;
            urljson = urlApiProduct + queryLim + '&' + queryPage + pagQueryValue;
            prevPage = urlApiProduct + queryLim + '&' + queryPage + (pagQueryValue -1);

        } 
  
        let offS = lim * pag;
        let offSNext = lim * pagQueryValue;
        
        
    
        db.Producto.findAndCountAll({
            limit: lim,
            offset: offS
        })
        .then(respuesta => {
          let conteo = respuesta.count;
          if (conteo <= offSNext){
            nextPage = 'Estás en la última página'
          }
          else if ((pag == 0 && lim == 10) && (conteo > offSNext)){
            nextPage = urlApiProduct + queryLim + '&' + queryPage + (pagQueryValue + 1);
          }
          else{
            nextPage = urlApiProduct + queryLim + '&' + queryPage + (pagQueryValue + 1);
          }
          let usuarios = respuesta.rows;
          let lista = funciones.getProductos(usuarios);
          
          let objPagApi = new Object();     
          objPagApi.meta = {
                status: 200,
                total: conteo,                              
                previous: prevPage,
                current: urljson,
                next: nextPage
            };
            objPagApi.data = lista;        
          res.json(objPagApi);        
      })
      
  },    
    
    productDetailApi: (req, res) => {
        let idReq = req.params.id;
        db.Producto.findByPk(idReq,{
            include: ['categoria_producto']
    }).then(respuesta => {
        let productoJSON = respuesta;
        let components = JSON.parse(productoJSON.componentes);
        productoJSON.componentes = components;

        let objDetailApi = new Object();     
        objDetailApi.meta = {
              status: 200,                             
              url: '/api/products/' + req.params.id,              
          };          
          objDetailApi.data = productoJSON;
          
          res.json(objDetailApi);
      
        })       
    },   
    countByCategory: (req, res) => {
      db.Producto.findAll(
        {include: ['categoria_producto'],
        attributes: ['Producto.id_categoria_producto', [db.Sequelize.fn("COUNT", db.Sequelize.col("Producto.id_categoria_producto")), "countCategory"]],        
        group: ['Producto.id_categoria_producto']
        }
      ).then(resultado => {
        let objCount = {
          pc_gamer : resultado[0].dataValues.countCategory,
          notebooks : resultado[1].dataValues.countCategory,
          componente : resultado[2].dataValues.countCategory
          
        }
        console.log(objCount);        
        res.json(objCount);
      })

    }
        
        
    }



module.exports = productoApiController;