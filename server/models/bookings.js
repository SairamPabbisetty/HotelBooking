const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userEmail: String,
    checkInDate: String,
    checkOutDate: String,
    roomType: String,
    numberOfGuests: Number
})

const bookings = mongoose.model('bookings', schema);

module.exports = bookings;
