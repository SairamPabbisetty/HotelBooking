const mongoose = require("mongoose")

const connectDB = async() => {
    try{
        const con = await mongoose.connect("mongodb://localhost:27017/HotelBooking");
        console.log("Database Connected");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;
