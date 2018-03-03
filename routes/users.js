const express = require('express');
const router = express.Router();

//#To refacter, seperate into the route and the controller
const usersController = require('../controllers/UsersController');

router.get('/register', usersController.getRegister);
router.post('/authenticate', usersController.postAuthenticate);
router.get('/profile', usersController.getProfile);
router.get('/validate', usersController.getValidate);

module.exports = router;