const express = require('express');
const path = require('path');
const fs = require('fs');

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
			if (elementoUsers.id == id)
			{	elementoUsers.name = infoFormUsers.name;
                if (infoFormUsers.descripUsers != null)
                {
                    elemento.descripUsers = infoFormUsers.descripUsers;
                }
				elemento.description = infoFormUsers.description;
                //elemento.price = infoForm.price;
				//elemento.discount = infoForm.discount;
			}
		})
	
		fs.writeFileSync(usersFilePath,JSON.stringify(usersJSON))
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
		if (errors.isEmpty())
		{
			let idUsers = req.params.id;
			res.render('./users/detailUsers/' + idUsers)

			//res.send('bien, no hay errores, continuamos')

		} else {
			res.render('./users/login', {errors: errors.mapped(), old: req.body})
		}
		//res.send('Viajaste por POST')
	}
}
module.exports = userController; 