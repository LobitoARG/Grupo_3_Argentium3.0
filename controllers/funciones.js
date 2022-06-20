const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');
const { get } = require('http');

let funciones = {
 getIdCategoria: (param) => {
    if (param == 'pc_gamer'){
        return 1;
    }
    else if (param == 'notebooks'){
        return 2;
    }
    else if (param == 'componentes') {
        return 3;
    }
    else{
      return 'La categoría no existe'
    }
},

getNombreCategoria: (param) => {
  if (param == 1){
      return 'pc_gamer';
  }
  else if (param == 2){
      return 'notebooks';
  }
  else if (param == 3) {
      return 'componentes';
  }
  else{
    return 'La categoría no existe'
  }
},

getComponentes: (param) => {  
                    
  var components = new Object();
  if (param.descripCPU){
      components.Microprocesador = param.descripCPU;
  }

  if(param.descripWC){
      components.Cooler = param.descripWC;
  }

  if(param.descripMB){
      components.Motherboard = param.descripMB;
  }

  if(param.descripRAM){
      components.RAM = param.descripRAM;
  }

  if(param.descripSSD){
      components.Disco = param.descripSSD;
  }        

  if(param.descripPWS){
      components.Fuente = param.descripPWS;
  }
  
  if(param.descripGPU){
      components.Video = param.descripGPU;
  }   

  if(param.descripGAB){
      components.Gabinete = param.descripGAB;
  }

  if(param.componente){
      components.Componente = param.componente;
  }
  return components;       
},

countByCategory: (productos) => {

  var countCategories = new Object();

  let pcGamer = productos.filter((param) => param.id_categoria_producto == 1);
  let ntbk = productos.filter((param) => param.id_categoria_producto == 2);
  let cmp = productos.filter((param) => param.id_categoria_producto == 3);

  countCategories.pc_gamer = pcGamer.length;
  countCategories.notebooks = ntbk.length;
  countCategories.componentes = cmp.length;

  return countCategories;
},

getProductos: (productos) => {
  let objeto = productos.map((producto) => {
    let obj = {
      id: producto.id_producto,
      name: producto.nombre,
      description: producto.descripcion,
      imagen: producto.imagen,
      category: funciones.getNombreCategoria(producto.id_categoria_producto),
      detail: '/api/products/' + producto.id_producto
    }
    return obj;
  })
  return objeto;



},

getObjUsuarios: (respuesta) => { 
        let resultadoFuncion = respuesta.map((element) => {
        let unUser = {
          id: element.id_usuario,
          first_name: element.first_name,
          last_name: element.last_name,
          email: element.email,
          imagen: element.imagenUsers,
          detail: '/api/user/' + element.id_usuario
        }
        return unUser;
       })
       return resultadoFuncion;   
    },


userListApi: (limite, pagina) => {    
      let lim = parseInt(limite);
      console.log(lim);
      let pag = parseInt(pagina);
      let prevPage = '';
      let nextPage = '';
      let urljson = '';
      
      
      
      if (!pag){
          pag = 0;
          urljson = '/api/user'      
          prevPage = 'Estás en la primera página';
          
      }
      else {
          urljson = '/api/user?page='+ pag;
          prevPage = '/api/user?page=' + (pag - 1);        
      }    
      let offS = lim * pag;  
      
  
      db.Usuario.findAndCountAll({
          limit: lim,
          offset: offS
      })
      .then(respuesta => {
        let conteo = respuesta.count;
        if (conteo < offS){
          nextPage = 'Estás en la última página'
        }
        else{
          nextPage = '/api/user?page=' + (pag + 1);
        }
        let usuarios = respuesta.rows;
        let lista = funciones.getObjUsuarios(usuarios);  
        
        let objPagApi = new Object();     
        objPagApi.meta = {
              status: 200,
              total: conteo,                
              url: urljson,
              previous: prevPage,
              next: nextPage
          };
          objPagApi.data = lista;        
        console.log(objPagApi);
        
    })
    return objPagApi; 
  }
}


    

module.exports = funciones;








// listaApiUsuarios: (respuesta) =>{
//   respuesta.map(function(element) { 
//       return listadoJSON = {
//       id: element.id_usuario,
//       first_name: element.first_name,
//       last_name: element.last_name,
//       email: element.email,
//       detail: '/api/user/' + element.id_usuario
//     }} 
//     )
// },



// funciones.listaApiUsuarios().then(respuesta => console.log(respuesta));
    
    
        
        
        
        
        
       






