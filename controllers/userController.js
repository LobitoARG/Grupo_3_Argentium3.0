const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../src/data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
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

	store: (req,res) => {
		let newUsers = req.body;
		let contraseña = req.body.password;
		let salt = bcrypt.genSaltSync(10)
		newUsers.password = bcrypt.hashSync(contraseña, salt );
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

        db.Usuario.findOne({
			where: {
				email: req.body.email
			}
		}
        ).then((resultado) => 
		{
			
            if(resultado){
				
				 console.log(req.body.password);

                if (bcrypt.compareSync(resultado.password,req.body.password))
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
					let msg = 'Los datos ingresados no son correctos'
                    return res.render('./users/login', {mensaje: msg});
                }

            }
        
			return res.render('./users/login', {errors: errors.mapped(), old: req.body})
        
        });

    }
	
}
module.exports = userController;