const mongoose = require('mongoose');
const User = require('../models/userModel');


exports.postRegister = (req, res, next)  => {
    let newUser = new User({                  //#To `new User`: get the object from the model
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

exports.postAuthenticate = (req, res, next)  => {
    res.send('AUTHENTICATE');
};

exports.getProfile = (req, res, next)  => {
    res.send('PROFILE');
};

// exports.getValidate = (req, res, next)  => {
//     res.send('VALIDATE');
// };