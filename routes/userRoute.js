const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddleware');

const storageUsers = multer.diskStorage({ // *****modifique storage por storageUsers
    destination: (req,file, cb) =>{
        cb (null,path.join(__dirname,'../public/img/usersImg')); // ***** cambié a carpeta usersImg y la destine
        
    },
    filename: (req,file,cb) =>{
        console.log(file);
        const nuevoUsuario = 'usuario_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoUsuario);
    }
})
const upload = multer ({storageUsers}) // 

/*** OBTENER TODOS LOS USUARIOS ***/ 
router.get('/', userController.index);

router.get('/detailUsers/:id', userController.detailUser);

/*** CREAR UN USUARIO ***/ 
router.get('/register', userController.createUser);
router.post('/register', upload.single('imagen-Users'),userController.store);

router.get('/edit/:id', userController.edit); 
router.put('/edit/:id', userController.update); 

router.delete('/detailUser/:id', userController.destroy); 




router.get('/login', guestMiddleware, userController.login);

module.exports = router; 