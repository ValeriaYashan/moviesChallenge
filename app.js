
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');


const indexRoute = require('./routes/indexRoute');
const detalleRoute = require('./routes/detalleRoute');
const loginRoute = require('./routes/loginRoute');
const registroRoute = require('./routes/registroRoute');


app.use(express.static('./public'));

app.use(session({secret: 'MyChallenge',
resave: true,
saveUninitialized: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'ejs');
app.set('views')

app.use('/', indexRoute);
app.use('/detalle', detalleRoute);
app.use('/registrar', registroRoute);
app.use('/login',loginRoute);
app.get('/logout', (req, res)=> {
    
    req.session.destroy()
    res.redirect('/')

})


app.listen(3000, (req, res) => {console.log("Servidor corriendo en el puerto 3000")});