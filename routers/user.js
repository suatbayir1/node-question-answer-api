const express = require('express');
const router = express.Router();
const { getSingleUser, getAllUsers } = require('../controllers/user');
const { getAccessToRoute } = require('../middlewares/auth/auth');
const { checkUserExist } = require('../middlewares/database/databaseErrorHelpers');

router.get('/', getAccessToRoute, getAllUsers);
router.get('/:id', [getAccessToRoute, checkUserExist], getSingleUser);

module.exports = router;