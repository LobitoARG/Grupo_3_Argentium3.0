const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./src/database/models');
const sequelize = db.sequelize; 
const {Op} = require('sequelize');
const funciones = require('./controllers/funciones');


let jsonres = funciones.userListApi(5, 2);
console.log(jsonres);





// db.Usuario.findAll()
//     .then(respuesta => {
//       let usuarios = funciones.getObjUsuarios(respuesta);
//       console.log(usuarios);
//     })






// let resultadoTest = funciones.listaApiUsuarios().then(respuesta => console.log(respuesta));

// let categoria = funciones.getIdCategoria('pc_gamer');
// console.log(categoria);

// categoria = funciones.getNombreCategoria(2);
// console.log(categoria);

// db.Producto.findAndCountAll({
//   include: ['categoria_producto']
//   })
//   .then(resultadoPromesa => {
//   let totalProductos = resultadoPromesa.count;
//   let Productos = resultadoPromesa.rows;
  
//   let verProductos = funciones.getProductos(Productos);
//   console.log(verProductos);
  

//   })       



// let miobjeto = {
//   name: 'PC DE PRUEBA',
//   price: '12313',
//   discount: '2',
//   type: '-jklhl',
//   descripCPU: 'jkh',
//   descripWC: 'lkjh',
//   descripMB: 'lkj',
//   descripRAM: 'hlk',
//   descripSSD: 'jh',
//   descripGPU: 'lkj',
//   descripPWS: 'hlkjh',
//   descripGAB: 'lkj',
//   description: 'hl',
//   category: 'pc_gamer'
// };

// let pruebaComp = funciones.getComponentes(miobjeto);
// console.log(pruebaComp);






// var lim = 5
// var pag = 2;

// var prevPage = '';
// var nextPage = '';
// var urljson = '';

// if (!pag){
//     pag = 0;
//     urljson = '/api/user'      
//     prev = 'Estás en la primera página';
    
// }
// else {
//     urljson = '/api/user?page='+ pag;
//     prev = '/api/user?page=' + pag--;        
// }    

// var offS = lim * pag;
// var donde = {
//     limit: lim,
//     offset: offS
// } 


// db.Usuario.findAndCountAll({
//   limit: lim,
//   offset: offS
// })
//     .then(function(respuesta){
//         let totalLength = respuesta.count;

//         if(totalLength < (lim * pag)){
//             next = 'Fin del listado' 
//         }
//         else{
//             next = '/api/user?page=' + pag++;
//         }
        
        
//            var listaApiUsuarios = respuesta.rows.map(function(element) { 
//             return {
//             id: element.id_usuario,
//             first_name: element.first_name,
//             last_name: element.last_name,
//             email: element.email,
//             detail: '/api/user/' + element.id_usuario
//           }} 
//           )

          
//     let resJson = {
//         meta: {
//             status: 200,
//             total: listaApiUsuarios.length,
//             url: urljson,      
//             prev: prevPage,      
//             next: nextPage
            
//         },
//         data: listaApiUsuarios
//     }
//     console.log(resJson)
//     return resJson;
    
//     });
    










// var usuarios = []; 

// db.Usuario.findAll()
// .then(function(respuesta){

//   var usuarios = respuesta.map(function(element) { return {
//       id: element.id_usuario,
//       first_name: element.first_name,
//       last_name: element.last_name,
//       email: element.email,
//       detail: '/api/user/' + element.id_usuario
//     }} 
//     )

//   console.log(usuarios);
// })

//   for (let i = 0; i < respuesta.length; i++) {
//     const element = respuesta[i];
//     let unUser = {
//       id: element.id_usuario,
//       first_name: element.first_name,
//       last_name: element.last_name,
//       email: element.email,
//       detail: '/api/user/' + element.id_usuario
//     }
//     usuarios.push(unUser);
//   }

//   console.log(usuarios);
// } )




//   let idUsers = 3;
// db.Usuario.findByPk(idUsers)
// .then(resultado => {
// let usudetail = {
//   id: resultado.id_usuario,
//   first_name: resultado.first_name,
//   last_name:resultado.last_name,
//   email: resultado.email,
//   telefono: resultado.telefono,
//   fechaAlta: resultado.created_at,
//   fotoPerfil: path.join(__dirname, 'public/img/usersImg/' + resultado.imagenUsers)
// }
// console.log(usudetail);

         
//       })






// db.Usuario.findOne({
//   where: {
//     email: 'lalala@lalala.com'
//   }
// }).then(resultado =>{
//    if (resultado !== null){
//     console.log(resultado.email);
//   }
//   else{
//     console.log('No conseguí al usuario');
//     console.log('La respuesta de la promesa es: ' + resultado)
//   }
// })

// async function buscalo (elmail) {

//  let variable = await db.Usuario.findOne({where: {email: elmail}});
//  return await variable;

// }

// let variableMetodo = buscalo('leot5865@gmail.com');

// console.log(variableMetodo);


// console.log(arrayValidatorsUsers.validacionLogin)











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



    //  db.Producto.findByPk(1,{
    //     include: ['categoria_producto']
    // })
    // .then(resultadoPromesa => {
    //         let productoSeleccionado = resultadoPromesa;
    //         let ComponentesEJS = JSON.parse(productoSeleccionado.componentes);
    //         let ComponentesEJSkeys = productoSeleccionado._options.attributes;  
    //         console.log(ComponentesEJS);
    //     });



    // function getIdCategoria (param) {
    //     if (param == 'pc_gamer'){
    //         return 1;
    //     }
    //     else if (param == 'notebooks'){
    //         return 2;
    //     }
    //     else{
    //         return 3;
    //     }
    // }

    // var gamer = 'pc_gamer';
    // console.log(getIdCategoria('notebooks'));

      


  //   console.log(miobjeto[0]);



    //   console.log()


    //   var components = new Object();
    //   if (miobjeto.descripCPU){
    //       components.Microprocesador = miobjeto.descripCPU;
    //   }

    //   if(miobjeto.descripGAB){
    //       components.Gabinete = miobjeto.descripGAB;
    //   }

    //   console.log(components);






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



      //   db.Producto.findByPk(1,{
      //     include: ['categoria_producto']
      // })
      // .then(resultadoPromesa => {
      //         let ProductoEJS = resultadoPromesa;
      //         let ComponentesEJS = JSON.parse(ProductoEJS.componentes);
      //         let ComponentesEJSkeys = Object.keys(ComponentesEJS);   
      //         let ComponentesEJSvalues = Object.values(ComponentesEJS);                                         
      //         console.log(ComponentesEJS);
      // })