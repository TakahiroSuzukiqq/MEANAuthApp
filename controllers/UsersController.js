const mongoose = require('mongoose');
const User = require('../models/userModel');
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

exports.postRegister =  (req, res, next) => {    //#To `new User`: get the object from the model
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }); 
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {res.json({success: true, msg: 'User registered successfully'});
        }
    });
};

exports.postAuthenticate = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {                       //#1check the username if it matches or not
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    //#To compare the password which user entered and the hashed password which can get from the user that was sent back to us
    // `(password, user.password)` password: user entered, user.password: hashed one
    User.comparePassword(password, user.password, (err, isMatch) => {     //#2check the password if it matches or not
      if(err) throw err;
      if(isMatch){
     // const token = jwt.sign(user.toJSON(), config.secret, {
     //     expiresIn: 604800 //1week(604800sec.) the toke expires
     // }); 
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 //1week(604800sec.) the toke expires
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,                //#This `user` was given back to us from ` User.getUserByUsername(username, (err, user)` means the user in the database
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
};

exports.getProfile = (req, res, next) => {
  res.json({user: req.user});
};

// // exports.getValidate = (req, res, next)  => {
// //     res.send('VALIDATE');
// // };
