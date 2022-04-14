const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlewares');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/login', guestMiddleware, userController.login);
router.get('/register', guestMiddleware, userController.register);

module.exports = router; 