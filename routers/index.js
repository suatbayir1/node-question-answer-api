// Libraries
const express = require('express');
const router = express.Router();

// Route modules
const question = require('./question');
const auth = require('./auth');
const user = require('./user');

// Routers
router.use('/questions', question);
router.use('/auth', auth);
router.use('/users', user);

module.exports = router;