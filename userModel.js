const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    email: String,
    dob: Date,
    password: String,
    repassword: String,
    mobile: String,
    gender: String,
    qualification: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;