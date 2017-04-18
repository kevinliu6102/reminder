let router = require('express').Router();
let controllers = require('./controllers/controllers');

router.get('/fetch', controllers.fetch);

router.post('/newrem', controllers.post);

module.exports = router;