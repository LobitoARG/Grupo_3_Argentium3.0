const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require('../../src/database/models');
const funciones = require('../funciones');


const productoApiController = {   
    // productIndexApi: (req,res) => {    
    //     let lim = parseInt(req.query.limite)
    //     let pag = parseInt(req.query.page);
    //     let prevPage = '';
    //     let nextPage = '';
    //     let urljson = '';   
              
    //     if (!pag){
    //         pag = 0;
    //         urljson = '/api/products'      
    //         prevPage = 'Estás en la primera página';
            
    //     }
    //     else {
    //         pag--;
    //         urljson = '/api/products?page='+ pag;
    //         prevPage = '/api/products?page=' + (pag - 1);        
    //     }    
    //     let offS = lim * pag;        

    //     db.Producto.findAndCountAll({
    //     include: ['categoria_producto'],
    //     limit: lim,
    //     offset: offS
    //     })
    //     .then(resultadoPromesa => {
    //     let conteo = resultadoPromesa.count;
    //     if (conteo < offS){
    //         nextPage = 'Estás en la última página'
    //       }
    //       else{
    //         nextPage = '/api/products?page=' + (pag + 1);
    //       }



    //     let Productos = resultadoPromesa.rows;
    //     let totalPorCategoria = funciones.countByCategory(Productos);
    //     let lista = funciones.getProductos(Productos);

    //     let objPagApi = new Object();     
    //     objPagApi.meta = {
    //           status: 200,
    //           total: conteo,                
    //           url: '/api/products',
    //           previous: '',
    //           next: ''
    //       };
    //       objPagApi.countByCategory = totalPorCategoria;
    //       objPagApi.data = lista;
          
    //       res.json(objPagApi);
      
    //     })       
    // }
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
        console.log(offSNext);
        
    
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
      
        
        
    }



module.exports = productoApiController;