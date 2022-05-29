const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../src/data/users.json');
const {validationResult} = require('express-validator');
const db = require('../src/database/models'); 

const userController = {   

    index: (req,res) => {
		db.Usuario.findAll()
		.then(function(users){
			res.render('./users/users', {users: users})
		})
		
	},

    detailUser: (req, res) => {
        let idUsers = req.params.id;
		db.Usuario.findByPk(idUsers)
		.then(function(resultado){
			res.render('./users/detailUsers', {"usersSeleccionado":resultado});
		})
        
    },    
    createUser: (req,res) => res.render('./users/register'),

	

// PARA VER MAÑANA: Está llegando la info del form en el req.body pero no está llegando en value del array de errores. 
	store: (req,res) => {
		let errores = validationResult(req);
		if (errores.isEmpty()) {
			db.Usuario.findOne({where: {email: req.body.email}})
			.then(resultado =>{
				if(resultado !== null){
					let mensaje = 'Ya existe un usuario registrado con ese email'
					res.render('./users/register', {mensaje});
				}
				else{
					let newUsers = req.body;
					let contraseña = req.body.password;		
					console.log(contraseña);
					newUsers.password = bcrypt.hashSync(contraseña.toString(), 10);
					db.Usuario.create({
						first_name:newUsers.first_name,
						last_name:newUsers.last_name,
						password: newUsers.password,
						email:newUsers.email,
						telefono: newUsers.telefono,
						imagenUsers: req.file.filename,
						id_categoria_usuario:1
					})
					res.redirect('/')			
				}
			})		
		}
		else{
			console.log(errores);
			res.render('./users/register', {errors: errores.array(), old: req.body});
		}
		}, 
    edit: (req, res) => {
		let idUsers = req.params.id;
		db.Usuario.findByPk(idUsers)
		.then(function(resultado){
			res.render('users/editUsers', {"usersSeleccionado":resultado});
		})
		//console.log (idProducto);
		//res.render('users/editUsers', {"usersSeleccionado": usersJSON[idUsers-1]});
	},
    update: (req, res) => {	

		let id = req.params.id;
		db.Usuario.update({
			first_name:req.body.first_name,
			last_name:req.body.last_name,
			password: req.body.password,
			email: req.body.email,
			telefono: req.body.telefono,
			imagenUsers: req.file.filename,
			id_categoria_usuario:1
		},{
			where:{
				id_usuario: id

			}
		})
		res.redirect('/')
	},    
    destroy: (req, res) => {
		let idUsers = req.params.id;
		db.Usuario.destroy({
			where:{
				id_usuario: idUsers
			}
		})		
		res.redirect('/')
	},
    login: (req, res) => res.render('./users/login'),
 
	processlogin: (req,res) => {	
		const erroresLogin = validationResult(req);
		if(erroresLogin.isEmpty()){
		db.Usuario.findOne({
			where: {
				email: req.body.email
			}
		}).then(resultado =>{
			if (resultado !== null){
				let booleanito = bcrypt.compareSync(req.body.password, resultado.password);        
                if (booleanito)
                {
                    let usuarioALoguearse = {
                    idUsuario: resultado.idUsuario,
                    nombres: resultado.nombres,
                    apellidos: resultado.apellidos,
                    email: resultado.email,
                    imgPerfil: resultado.imgPerfil
                    };
 
                    delete resultado.password;
                    req.session.usuarioLogeado = usuarioALoguearse;
                    //req.session.userLogged = usuarioALoguearse;

                    if(req.body.recordarUsuario){
                        res.cookie('recordarme', req.body.email, {maxAge: (1000 * 60) * 2})
                    }
                    
                    return res.redirect('/');
                } else {
                    let msg = 'La contraseña ingresada no es correcta'
                    return res.render('./users/login', {mensaje: msg});
                }
			}
			else{
				let msg = 'El email ingresado no es correcto'
				return res.render('./users/login', {mensaje: msg});
			}
		})
	}
	else{
	console.log(erroresLogin);
	res.render('./users/login', {errors: erroresLogin.array(), old: req.body});
	}
                   
    }
	 

}
	

module.exports = userController;