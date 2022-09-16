var express = require('express');
var router = express.Router();
const {homepageController} = require('./controllers/homepage');
const { postController } = require('./controllers/post');
const { tagController } = require('./controllers/tag');

router.use('/tags/:tag', tagController);
router.use('/tags/', tagController);
router.use('/posts/:id', postController);
router.use('/', homepageController);

module.exports = router;
