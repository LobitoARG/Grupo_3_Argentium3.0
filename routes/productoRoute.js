const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddleware');
const { check } = require('express-validator');
const db = require('../src/database/models');

//NO ESTÁ GUARDANDO LA IMAGEN EN LA CARPETA QUE LE INDIQUÉ. 
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        let categoria = req.body.category
              cb (null, 'public/img/' + categoria) // aca despues hago un switch para cada caso
    },
    filename: (req,file,cb) =>{
        console.log(file);
        let categoria = req.body.category
        let nuevoProducto = Date.now()+ categoria + path.extname(file.originalname);
        cb (null, nuevoProducto);
    }
})
const upload = multer ({storage})


const productoValidator = [
    check('name')
        .notEmpty().withMessage('Debes completar el nombre del producto').bail()
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('description')
        .notEmpty().withMessage('Debes completar la descripción del producto').bail()
        .isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres'),
    check('imagenProducto')
        .custom((imagenProducto, {req}) => {
            var extension = path.extname(req.file.originalname)
            var aceptadas = ['.jpg', '.jpeg', '.png', '.gif'];
            if (aceptadas.includes(extension)){
                return extension;
            }
            else {
                return false
            }

        }).withMessage('Tipo de archivo no permitido. Debe ser una imagen en formato JPG, JPEG, PNG O GIF')
]



/*** OBTENER 1 PRODUCTO ***/ 
router.get('/detailProduct/:id', productoController.detailProduct);

/*** CART DE 1 PRODUCTO ***/ 
router.get('/productCart', authMiddleware ,productoController.productCart);

/*** CREAR UN PRODUCTO PRODUCTO ***/ 
router.get('/create', authMiddleware, productoController.createProduct); /*** SELECCION DE CATEGORIA PARA IR AL FORM CORRESPONDIENTE ***/ 
router.get('/create/createProduct-pc_gamer', authMiddleware,  productoController.createProductpc_gamer); // sumarle el authMIddlewares para que funcione la verificacion de registro de usuario
router.get('/create/createProduct-notebooks',   authMiddleware,  productoController.createProductnotebooks);
router.get('/create/createProduct-componentes',  authMiddleware,   productoController.createProductcomponentes);
router.post('/', upload.single('imagenProducto'), productoValidator,productoController.store);

/*** EDITAR UN PRODUCTO ***/ 
router.get('/edit/:id',   authMiddleware, productoController.edit); 
router.put('/edit/:id', upload.single('imagenProducto'),productoController.update); 

/*** OBTENER TODOS LOS PRODUCTOS ***/ 
router.get('/', productoController.index);

/*** BORRAR UN PRODUCTO ***/ 
router.delete('/detail/:id',  authMiddleware, productoController.destroy); 

/*** BUSCAR PRODUCTOS ***/
router.get('/searchProducts', productoController.searchProduct)

module.exports = router; 