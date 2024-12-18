const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: String,
    email: String,
    password: String
})

const user = mongoose.model('user', schema);

module.exports = user; 