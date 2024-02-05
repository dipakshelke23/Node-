const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const midlwares = require('../midlwares/authMiddleware');

router.get('/users',midlwares.authenticateUser, userController.getUsers);
router.get('/users/:id', midlwares.authenticateUser,midlwares.isAdmin,userController.getUser);
router.post('/users',midlwares.authenticateUser, midlwares.isAdmin,userController.addUsers);
router.put('/users/:id',midlwares.authenticateUser,midlwares.isAdmin, userController.updateUser);
router.delete('/users/:id', midlwares.authenticateUser,midlwares.isAdmin, userController.deleteUser);

module.exports = router;