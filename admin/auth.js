const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const users = []; // This should be replaced with a database in production

// Middleware to check authentication
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.sendStatus(403);
    }

    // Generate token
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    res.json({ token });
});

// Logout route
router.post('/logout', (req, res) => {
    // Here you would handle logout, e.g., by invalidating the token in your DB or cache.
    res.sendStatus(204);
});

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
