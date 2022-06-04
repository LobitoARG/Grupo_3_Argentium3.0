const express = require('express');
const mainController = require('../controllers/mainController');


const router = express.Router(); 

router.get('/', mainController.home);
router.get('/contacto', mainController.contacto)
router.get('/terminos', mainController.terminos)

module.exports = router; 