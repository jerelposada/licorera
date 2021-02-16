const express = require('express');
const router = express.Router();
const handlers = require('../lib/controllers/frontendController')


module.exports = function() {

    
    router.get('/',handlers.index);


    //listar Proyecto

    router.get('/:url', handlers.productosUrl)
    return router;
}