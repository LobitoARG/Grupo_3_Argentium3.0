const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddleware');
const { body } = require('express-validator')

const storage = multer.diskStorage({ // *****modifique storage por storageUsers
    destination: (req,file, cb) =>{
        cb (null,path.join(__dirname,'../public/img/usersImg')); // ***** cambié a carpeta usersImg y la destine
        
    },
    filename: (req,file,cb) =>{
        const nuevoUsuario = file.fieldname + Date.now() + path.extname(file.originalname);
        cb (null, nuevoUsuario);
    }
})
var upload = multer({storage}) // 

const validacionLogIn = [
    body('email')
    .notEmpty().withMessage('Debes completar el campo de correo electronico').bail()
    .isEmail().withMessage('Debes ingresar un formato de email correcto'),
    body('password')
    .notEmpty().withMessage('Debes completar el campo de contraseña').bail()
    .isLength({min:5}).withMessage('La contraseña debe tener al menos 5 caracteres')
];

/*** OBTENER TODOS LOS USUARIOS ***/ 
router.get('/',authMiddleware,userController.index);

/*** LOG IN DE USUARIO ***/ 
router.get('/login',guestMiddleware ,userController.login);
router.post('/login', validacionLogIn, userController.processlogin) // sumamos el verificador del login in llamado validacionLogIn

router.get('/detailUsers/:id', authMiddleware ,userController.detailUser);

/*** CREAR UN USUARIO ***/ 
router.get('/register', guestMiddleware,userController.createUser);
router.post('/register',upload.single('imagenUsers'), userController.store); // upload.single('imagen-Users') falta sumar esto, lo saco mientras hago el validate

router.get('/edit/:id',authMiddleware ,userController.edit); 
router.put('/edit/:id', upload.single('imagenUsers') ,userController.update); 

router.delete('/detailUser/:id', authMiddleware ,userController.destroy); 

module.exports = router; 