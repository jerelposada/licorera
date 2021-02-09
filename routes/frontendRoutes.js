const express = require('express');
const router = express.Router();
const handlers = require('../lib/controllers/frontendController')


router.get('/about', handlers.about);
router.get('/',handlers.index);


module.exports = router;