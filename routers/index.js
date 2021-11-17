// Libraries
const express = require('express');
const router = express.Router();

// Route modules
const question = require('./question');
const auth = require('./auth');

// Routers
router.use('/questions', question);
router.use('/auth', auth);

module.exports = router;