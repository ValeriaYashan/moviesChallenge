// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();


const indexRoute = require('./routes/indexRoute');
const moviesRoute = require('./routes/moviesRoute');
const genresRoutes = require('./routes/genresRoutes');



app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(methodOverride('_method'));


app.use('/',indexRoute);
app.use(moviesRoute);
app.use(genresRoutes);


app.use(express.json());




app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));

 