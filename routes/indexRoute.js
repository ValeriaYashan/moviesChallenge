const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const authMiddleware = require('../middlewares/authMiddleware');
const { check} = require('express-validator');
/*const moviesAddValidation = require('../validations/moviesAddValidation');*/

const validateMovies = [check('').isEmail().withMessage('Debes completar un email valido'), 
                      check('').isLength({ min: 8 }).withMessage('La contraseña debe tener mas de 8 caracteres.'),
                      check('').notEmpty().withMessage('Debe completar un nombre.'),
                        check('').notEmpty().withMessage('Debe selecionar un rol.')]

/*usuario y administrador*/

router.get('/', indexController.listado)

/*administrador*/
router.get('/crear',authMiddleware,indexController.crear)
/*router.get('/crear',authMiddleware,validateMovies, indexController.crear)*/
router.post('/crear',authMiddleware, indexController.guardar)

module.exports = router;