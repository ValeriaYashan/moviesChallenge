const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();



const indexRoutes = require('./routes/indexRoutes');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const userRoutes = require('./routes/userRoutes');




app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(express.urlencoded({ extended: false }));
app.use(express.json())

/
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(userRoutes);


app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
