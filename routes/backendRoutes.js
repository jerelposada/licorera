const express = require ('express');
const router = express.Router();

const homeControllers = require('../lib/controllers/backend');
const { body } = require('express-validator');

 module.exports = function() {
    router.get('/', homeControllers.adminHome);

    router.get('/nuevoProducto',homeControllers.formularioProducto);

    router.post('/nuevoProducto',
    body('nombre').not().isEmpty().escape().trim(),
    body('descriptionShort').not().isEmpty().trim().escape(),
    body('descriptionLong').not().isEmpty().trim().escape(),
    body('Cantidad').not().isEmpty().trim().escape(),
    homeControllers.nuevoProducto);

    return router;
 }
