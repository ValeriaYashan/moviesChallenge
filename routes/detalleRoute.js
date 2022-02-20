const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController')
const authMiddleware = require('../middlewares/authMiddleware')

/*ruta del invitado y usuario*/
router.get('/:id', detalleController.detalle);

/*rutas del administrador*/
router.get('/editar/:id',authMiddleware, detalleController.editar);
router.post('/editar/:id', authMiddleware,detalleController.actualizar);
router.post('/borrar/:id',authMiddleware, detalleController.borrar)

module.exports = router;