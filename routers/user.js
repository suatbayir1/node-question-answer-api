const express = require('express');
const router = express.Router();
const { getSingleUser, getAllUsers } = require('../controllers/user');
const { getAccessToRoute } = require('../middlewares/auth/auth');
const { checkUserExist } = require('../middlewares/database/databaseErrorHelpers');
const userQueryMiddleware = require('../middlewares/query/userQueryMiddleware');
const User = require('../models/User');

router.get('/', [getAccessToRoute, userQueryMiddleware(User)], getAllUsers);
router.get('/:id', [getAccessToRoute, checkUserExist], getSingleUser);

module.exports = router;