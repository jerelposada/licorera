const express = require('express');
const router = express.Router();
const handlers = require('../lib/controllers/frontendController')


module.exports = function() {

    router.get('/about', handlers.about);
    router.get('/',handlers.index);

    return router;
}