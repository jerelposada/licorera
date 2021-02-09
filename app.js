const express = require('express');
const routes = require('./routes/frontendRoutes');
const app = express();

const port = process.env.PORT || 3002;

app.use(express.static(__dirname + '/public'))

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.disable('x-powered-by');

app.use('/', routes);

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
