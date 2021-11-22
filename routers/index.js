// Libraries
const express = require('express');
const router = express.Router();

// Route modules
const question = require('./question');
const auth = require('./auth');
const user = require('./user');
const admin = require('./admin');

// Routers
router.use('/questions', question);
router.use('/auth', auth);
router.use('/users', user);
router.use('/admin', admin);

module.exports = router;