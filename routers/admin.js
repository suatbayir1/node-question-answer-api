const express = require('express');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/auth/auth');
const router = express.Router();
const { blockUser, deleteUser } = require('../controllers/admin');
const { checkUserExist } = require('../middlewares/database/databaseErrorHelpers');

// Middlewares
router.use([getAccessToRoute, getAdminAccess]);

router.get("/block/:id", checkUserExist, blockUser);
router.delete("/user/:id", checkUserExist, deleteUser);

module.exports = router;
