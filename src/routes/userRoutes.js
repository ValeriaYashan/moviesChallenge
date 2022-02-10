const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');




/*----Rutas para vista de formulario de login----*/
router.get('/login', userController.login);
router.post('/', userController.logUser);

/*----Rutas para vista de formulario de registro----*/
router.get('/register', userController.register);


/*----Ruta para info de perfil de usuario-----*/
router.get('/:id/profile', userController.profile);

/*----Ruta para cerrar sesion-----*/
router.put('/logoff', userController.logoff);



module.exports = router;
