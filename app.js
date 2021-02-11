const express = require('express');
const routesFrontend = require('./routes/frontendRoutes');
const routesBackend= require('./routes/backendRoutes');
const path = require('path');
const bodyparser = require ('body-parser');

// crear la conexion a la bd 
const db = require('./config/db');

db.sync() 
        .then(() => console.log('Conectado al servidor'))
        .catch( (error) =>console.log(error))

//importar el modelo
require('./lib/models/Productos');

const app = express();

const port = process.env.PORT || 3005;

app.use(express.static(__dirname + '/public'))


// Se indica el directorio donde se almacenarán las plantillas 
app.set('views',path.join(__dirname,'./views'));

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.disable('x-powered-by');

//habilitar bodyparser para leer datos del formulario
app.use(bodyparser.urlencoded({extended: true}));

app.use('/xxx', routesBackend());
app.use('/', routesFrontend());



// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})




app.listen(port, () => {
  console.log(`ejemplo, el servidor esta en http://localhost:${port}`)
})
