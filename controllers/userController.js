const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const usersFilePath = path.join(__dirname, '../src/data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {   

    login: (req, res) => res.render('./users/login'),
    register: (req, res) => res.render('./users/register')
}



module.exports = userController; 

