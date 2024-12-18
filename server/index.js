const express = require('express')
const connectDB = require('./DbConnection/connection')
const bodyparser = require('body-parser')
const cors = require('cors')

const bookingRoutes = require('./routes/bookingRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express() 

app.use(express.json()) 
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs') 
app.use(cors())

connectDB();

app.get("/", (req, res) => {
    res.send({path: "/"}) 
})

app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.listen(3001, () => {
    console.log("Port is on 3001");
}) 
