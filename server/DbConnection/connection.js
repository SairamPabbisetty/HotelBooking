const mongoose = require("mongoose")

const connectDB = async() => {
    try{
        const con = await mongoose.connect("mongodb+srv://sairampabbisetty04:sairam@04P@hotelmanagement.1egny.mongodb.net/?retryWrites=true&w=majority&appName=HotelManagement
");
        console.log("Database Connected");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;
