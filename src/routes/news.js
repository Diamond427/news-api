const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/', newsController.getArticles);
router.get('/search', newsController.searchArticles);
router.get('/:title', newsController.getArticleByTitle);

module.exports = router;
