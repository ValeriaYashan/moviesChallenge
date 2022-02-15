// ************ Require's ************
const express = require('express');
const router = express.Router();
// Controller
const controller = require('../controllers/moviesController');

/* Index de Películas. */
router.get('/movies', controller.index);

/* Detalle de Película. user */
router.get('/detail/:id', controller.show);
/* CRUD admin */
router.get('/crud',controller.crud);
/* Creación de una película */
router.get('/create', controller.create);
router.post('/create', controller.store);

/* Edición de una película */
router.get('movies/edit/:id', controller.edit);
router.put('movies/edit/:id', controller.update);

/* Eliminación de una película */ 
router.delete('/delete/:id', controller.destroy);


module.exports = router;
