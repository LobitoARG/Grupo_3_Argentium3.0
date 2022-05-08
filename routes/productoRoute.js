const express = require('express');
const productoController = require('../controllers/productoController');
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddleware');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        let categoria = req.body.category
              cb (null, 'public/img/' + categoria) // aca despues hago un switch para cada caso
    },
    filename: (req,file,cb) =>{
        console.log(file);
        const nuevoNombre = 'nombre_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoNombre);
    }
})
const upload = multer ({storage})




/*** OBTENER 1 PRODUCTO ***/ 
router.get('/detailProduct/:id', productoController.detailProduct);

/*** CART DE 1 PRODUCTO ***/ 
router.get('/productCart',productoController.productCart);

/*** CREAR UN PRODUCTO PRODUCTO ***/ 
router.get('/create',productoController.createProduct); /*** SELECCION DE CATEGORIA PARA IR AL FORM CORRESPONDIENTE ***/ 
router.get('/create/createProduct-pc', productoController.createProductPC); // sumarle el authMIddlewares para que funcione la verificacion de registro de usuario
router.get('/create/createProduct-ntbk', productoController.createProductntbk);
router.get('/create/createProduct-comp',productoController.createProductcomp);
router.post('/', upload.single('imagenProducto'),productoController.store);



/*** EDITAR UN PRODUCTO ***/ 

router.get('/edit/:id',authMiddleware ,productoController.edit); 
router.put('/edit/:id', authMiddleware,productoController.update); 

/*** OBTENER TODOS LOS PRODUCTOS ***/ 
router.get('/', productoController.index);

/*** BORRAR UN PRODUCTO ***/ 
router.delete('/detail/:id',authMiddleware,productoController.destroy); 

module.exports = router; 