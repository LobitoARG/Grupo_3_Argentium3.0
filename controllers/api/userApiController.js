const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const db = require('../../src/database/models');
const funciones = require('../funciones');


const userApiController = {   
    userIndexApi: (req,res) => {   
         
      let lim = parseInt(req.query.limit);
      let pag = parseInt(req.query.page);
      let prevPage = '';
      let nextPage = '';
      let urljson = '';
      let urlApiUser = '/api/user';
      let queryPage = '?page=';
      let pagQueryValue = parseInt(req.query.page);
      let queryLim = '?limit='

      if(!lim){
        lim = 10;
        urljson = urlApiUser;
        queryLim += lim;
      }

            
      if (!pag){
          pag = 0;
          urljson = urlApiUser + queryLim    
          prevPage = 'Estás en la primera página';
          pagQueryValue = 1;
          
      }
      else {
          pag--;
          urljson = urlApiUser + queryPage + pagQueryValue + '&' + queryLim;
          prevPage = urlApiUser + queryPage + (pagQueryValue - 1) + queryLim;
      } 

      let offS = lim * pag;
      let offSNext = lim * pagQueryValue;
      
  
      db.Usuario.findAndCountAll({
          limit: lim,
          offset: offS
      })
      .then(respuesta => {
        console.log(offSNext);
        let conteo = respuesta.count;
        if (conteo <= offSNext){
          nextPage = 'Estás en la última página'
        }
        else if ((pag == 0 && lim == 10) && (conteo > offSNext)){
          nextPage = urlApiUser + queryPage + (pagQueryValue + 1) + queryLim;
        }
        else{
          nextPage = urlApiUser + queryPage + (pagQueryValue + 1) + queryLim;
        }
        let usuarios = respuesta.rows;
        let lista = funciones.getObjUsuarios(usuarios);  
        
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
      userDetailApi: (req, res) => {
        let idUser = req.params.id;
        db.Usuario.findByPk(idUser)
        .then(resultado => {
        let obj = resultado.dataValues;
        let {password, id_categoria_usuario, created_at, updated_at, ...usudetail} = obj;   
        objUserApi = new Object();
        objUserApi.meta = {
          status: 200,                                     
          url: '/api/user/' + req.params.id,  
      };
      objUserApi.data = usudetail;        
      res.json(objUserApi); 
        })

    }

}


module.exports = userApiController;