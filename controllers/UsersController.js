
exports.getRegister = (req, res, next)  => {
    res.send('REGISTER');
};

exports.postAuthenticate = (req, res, next)  => {
    res.send('AUTHENTICATE');
};

exports.getProfile = (req, res, next)  => {
    res.send('PROFILE');
};

exports.getValidate = (req, res, next)  => {
    res.send('VALIDATE');
};