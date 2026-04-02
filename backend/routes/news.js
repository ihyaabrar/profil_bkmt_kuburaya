'use strict';

const express = require('express');
const router = express.Router();

// Mock database
let news = [];

// CREATE: Add a news article
router.post('/', (req, res) => {
    const article = req.body;
    news.push(article);
    res.status(201).json(article);
});

// READ: Get all news articles
router.get('/', (req, res) => {
    res.json(news);
});

// READ: Get a news article by ID
router.get('/:id', (req, res) => {
    const article = news.find(n => n.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
});

// UPDATE: Update a news article by ID
router.put('/:id', (req, res) => {
    let article = news.find(n => n.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ message: 'Article not found' });
    article = { ...article, ...req.body };
    res.json(article);
});

// DELETE: Delete a news article by ID
router.delete('/:id', (req, res) => {
    news = news.filter(n => n.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
