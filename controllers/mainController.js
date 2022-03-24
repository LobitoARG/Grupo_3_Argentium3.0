const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../src/data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        var sales = [];        
        for (let i = 0; i < products.length; i++) {
            const element = products[i];            
            if (element.type == 'SALE'){
                sales.push(element);
            }            
        }

        var discounts = products.sort(function(a, b) {return b.discount-a.discount});
      
        var news = [];
        for (let i = 0; i < products.length; i++) {
            const element = products[i];            
            if (element.type == 'NEW'){
                news.push(element);
            }            
        }
      
      
        res.render('./users/home', {sales, discounts, news});
    },

    login: (req, res) => res.render('./users/login'),
    register: (req, res) => res.render('./users/register')
}


module.exports = mainController; 

