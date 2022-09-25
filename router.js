var express = require('express');
var router = express.Router();
const {homepageController} = require('./controllers/homepage');

router.use('/', homepageController);

module.exports = router;
