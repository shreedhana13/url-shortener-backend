const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const URLController = require('./controllers/URLController');

// Authentication routes
router.post('/api/login', UserController.login);
router.post('/api/register', UserController.register);
router.post('/api/forgot-password', UserController.forgotPassword);

// URL shortener routes
router.post('/api/create-url', URLController.createURL);
router.get('/api/show-urls', URLController.showURLs);

module.exports = router;
