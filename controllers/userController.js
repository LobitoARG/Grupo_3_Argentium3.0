const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../src/data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const {validationResult} = require('express-validator');

const userController = {   

    index: (req,res) => res.render('./users/users', {users: usersJSON}),

    detailUser: (req, res) => {
        let idUsers = req.params.id;
        res.render('./users/detailUsers', {"usersSeleccionado":usersJSON[idUsers-1]});
    },    
    createUser: (req,res) => res.render('./users/register'),
	store: (req,res) => {
		let newUsers = req.body;
		newUsers.image =req.file.filename;
		newUsers.pass_confirm = bcrypt.hashSync(req.file.pass);
		newUsers.pass = bcrypt.hashSync(req.file.pass_confirm)
		console.log(newUsers.image)
		let ultimoIndiceUsers = usersJSON.length+1;
		newUsers.id = ultimoIndiceUsers;
		usersJSON.push(newUsers)
		let newUsersJSON = JSON.stringify(usersJSON)
		fs.writeFileSync(usersFilePath, newUsersJSON)
		res.redirect('/')
		}, 
    edit: (req, res) => {
		let idUsers = req.params.id;
		//console.log (idProducto);
		res.render('users/editUsers', {"usersSeleccionado": usersJSON[idUsers-1]});
	},
    update: (req, res) => {	
		let id = req.params.id;
		let infoFormUsers=req.body;       
		usersJSON.forEach(function (elementoUsers){
			if (elementoUsers.id == id){
			elementoUsers.first_name = req.body.first_name;
			elementoUsers.last_name = req.body.last_name;
			elementoUsers.dni = req.body.dni;
			elementoUsers.email = req.body.email;
			elementoUsers.pass = bcrypt.hashSync(req.body.pass);
			elementoUsers.pass_confirm = bcrypt.hashSync(req.body.pass_confirm);
			elementoUsers.addres = req.body.addres;
			elementoUsers.city = req.body.city;
			if(req.file != undefined){
			elementoUsers.imagen = req.file.filename;
			}						             
			}					
		})
		let newUsersJSON = JSON.stringify(usersJSON)
		fs.writeFileSync(usersFilePath, newUsersJSON)
		res.redirect('/')
	
	},    
    destroy: (req, res) => {
		let idUsers = req.params.id;		
		const nuevoUsers = usersJSON.filter(function(users){
			return users.id != idUsers;
		})
		console.log(nuevoUsers)
		fs.writeFileSync(usersFilePath,JSON.stringify(nuevoUsers))
		res.redirect('/')
	},
    login: (req, res) => res.render('./users/login'),

	processlogin: function (req,res){
		let errors = validationResult(req)

		if (errors.isEmpty()) {
			let users = fs.readFileSync(usersFilePath, 'utf-8');
			users = JSON.parse(users)
			
			for (let i = 0; i < users.length; i++) {
				
				if (users[i].email == req.body.email && (bcrypt.compareSync(req.body.password, users[i].password))){ 

				var usuarioALoguearse = users[i]
				break;
				}
			}
			
			if (usuarioALoguearse == undefined){
				let msg = 'Los datos ingresados no son correctos'
				return res.render('./users/login', {mensaje: msg});
			}
				req.session.usuarioLogeado = usuarioALoguearse;
				idUsuarioLogeado = (usuarioALoguearse.id)-1;

				if (req.body.recordarUsuario != undefined){
					res.cookie('recordarme',
					usuarioALoguearse.email, {
						maxAge: 200000
					})
				}
				//res.redirect('/user/detailUsers/'+idUsuarioLogeado)
				res.render('./users/detailUsers', {"usersSeleccionado":usersJSON[usuarioALoguearse.id-1]});
				
				console.log(req.session.usuarioLogeado)
		} else {
			return res.render('./users/login', {errors: errors.mapped(), old: req.body})

		}
	}
	
}
module.exports = userController;