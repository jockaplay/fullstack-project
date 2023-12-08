const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    email: String,
    passowrd: String
});

module.exports = User;