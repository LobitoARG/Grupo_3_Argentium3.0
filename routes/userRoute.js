const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddleware');
const { check } = require('express-validator')

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
    check('email')
    .notEmpty().withMessage('Debes completar el campo de correo electronico').bail()
    .isEmail().withMessage('Debes ingresar un formato de email correcto'),
    check('password')
    .notEmpty().withMessage('Debes completar el campo de contraseña').bail()
    .isLength({min:5}).withMessage('La contraseña debe tener al menos 5 caracteres')
];

const validacionRegister = [
    check('first_name')
        .notEmpty().withMessage('Debes completar el campo Nombre').bail()
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('last_name')
        .notEmpty().withMessage('Debes completar el campo Apellido').bail()
        .isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    check('password').
        trim().notEmpty().withMessage('Debes completar el campo de contraseña'),
    check('password2')
        .trim().notEmpty().withMessage('Debes confirmar la contraseña').bail()
        .custom(async (password2, {req}) => {
            const password1 = await req.body.password
            if( password2 !== password1){
               return false
            }})
        .withMessage('Las contraseñas deben coincidir'),
    check('email')
        .notEmpty().withMessage('Debes completar el campo de correo electronico').bail()
        .isEmail().withMessage('Debes ingresar un formato de email correcto'),
    check('telefono')
        .notEmpty().withMessage('Debes completar el campo de Teléfono').bail()
        .isNumeric().withMessage('Debe ingresar solo números'),
    check('imagenUsers')
        .custom((imagenUsers, {req}) => {
            var extension = path.extname(req.file.originalname)
            if (extension == '.jpg' || extension == '.jpeg' || extension == '.png' || extension == '.gif'){
                return extension;
            }
            else {
                return false
            }

        }).withMessage('Tipo de archivo no permitido. Debe ser una imagen en formato JPG, JPEG, PNG O GIF')

]



 
/*** OBTENER TODOS LOS USUARIOS ***/ 
router.get('/list', userController.index); // authMiddleware,

/*** LOG IN DE USUARIO ***/ 
router.get('/login',guestMiddleware,userController.login); // guestMiddleware ,
router.post('/login', validacionLogIn  ,userController.processlogin) // 10.05 que primero funcione y dsp sumamos el verificador validacionLogIn

router.get('/detailUsers/:id',userController.detailUser); // authMiddleware ,
 
/*** CREAR UN USUARIO ***/ 
router.get('/register',guestMiddleware,userController.createUser); // guestMiddleware,
router.post('/register', upload.single('imagenUsers'), validacionRegister, userController.store); 

router.get('/edit/:id' ,userController.edit);  // ,authMiddleware
router.put('/edit/:id', upload.single('imagenUsers') ,userController.update); 

router.delete('/detailUsers/:id',userController.destroy);  //  authMiddleware ,

module.exports = router; 