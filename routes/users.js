const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

//#To refacter, seperate into the route and the controller
const usersController = require('../controllers/UsersController');
const User = require('../models/userModel');        //#The name should be the same as exported model name

router.post('/register', usersController.postRegister);
router.post('/authenticate', usersController.postAuthenticate);
router.get('/profile', usersController.getProfile);
// router.get('/validate', usersController.getValidate);

module.exports = router;