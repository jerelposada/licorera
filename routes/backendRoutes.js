const express = require ('express');
const router = express.Router();

const homeControllers = require('../lib/controllers/backend');


 module.exports = function() {
    router.get('/', homeControllers.adminHome);

    router.get('/nuevoProducto',homeControllers.formularioProducto);

    router.post('/nuevoProducto',homeControllers.nuevoProducto);

    return router;
 }