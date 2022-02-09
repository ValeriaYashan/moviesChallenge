const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { route } = require('./genresRoutes');

//Rutas exigidas para la vista del USER
router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);


//Rutas  para la creación del CRUD ADMINISTRADOR
/*router.get('/crud',adminMiddleware, controller.crud); // Te lleva a la vista de todos los productos
router.get('/movies/add',adminMiddleware, moviesController.add);
router.get("/movies/create",adminMiddleware, moviesController.create); 
router.get("/movies/edit/:id",adminMiddleware, moviesController.edit); 
router.put('/movies/update/:id',adminMiddleware, moviesController.update);
router.get('/movies/delete/:id',adminMiddleware, moviesController.delete);
router.delete('/movies/delete/:id',,adminMiddleware, moviesController.destroy);*/

//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);



module.exports = router;