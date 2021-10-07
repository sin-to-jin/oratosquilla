const express = require('express');
const router = express.Router();
const api = require('./api.js');

api(router, require('./controllers/healthcheck.js'), ['index']);
api(router, require('./controllers/human.js'));
api(router, require('./controllers/animal.js'));

module.exports = router;
