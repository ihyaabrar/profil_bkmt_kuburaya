const express = require('express');
const router = express.Router();

// POST /login - Authenticate user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Logic for authenticating user
    res.status(200).json({ message: 'User logged in successfully', user: username });
});

// POST /register - Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Logic for registering new user
    res.status(201).json({ message: 'User registered successfully', user: username });
});

module.exports = router;