const axios = require('axios');
const NodeCache = require('node-cache');
require('dotenv').config();

const apiCache = new NodeCache({ stdTTL: 300 });
const API_URL = 'https://gnews.io/api/v4/top-headlines';
const API_KEY = process.env.API_KEY;

exports.getArticles = async (n) => {
    const cacheKey = `getArticles_${n}`;
    if (apiCache.has(cacheKey)) {
        return apiCache.get(cacheKey);
    }

    const response = await axios.get(`${API_URL}?token=${API_KEY}&max=${n}`);
    const articles = response.data.articles;
    apiCache.set(cacheKey, articles);
    return articles;
};

exports.searchArticles = async (keyword) => {
    const cacheKey = `searchArticles_${keyword}`;
    if (apiCache.has(cacheKey)) {
        return apiCache.get(cacheKey);
    }

    const response = await axios.get(`${API_URL}?token=${API_KEY}&q=${keyword}`);/
    const articles = response.data.articles;
    apiCache.set(cacheKey, articles);
    return articles;
};

exports.getArticleByTitle = async (title) => {
    const cacheKey = `getArticleByTitle_${title}`;
    if (apiCache.has(cacheKey)) {
        return apiCache.get(cacheKey);
    }

    const response = await axios.get(`${API_URL}?token=${API_KEY}&q=${title}`);
    const articles = response.data.articles;
    const article = articles.find((art) => art.title === title);
    if (article) {
        apiCache.set(cacheKey, article);
    }
    return article;
};
