'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware for verifying JWT tokens
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (token == null) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = authenticateToken;
