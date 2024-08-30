const newsService = require('../services/newsService');

exports.getArticles = async (req, res) => {
    try {
        const articles = await newsService.getArticles(req.query.n);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchArticles = async (req, res) => {
    try {
        const articles = await newsService.searchArticles(req.query.keyword);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArticleByTitle = async (req, res) => {
    try {
        const article = await newsService.getArticleByTitle(req.params.title);
        if (!article) {
            res.status(404).json({ error: 'Article not found' });
        } else {
            res.json(article);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
