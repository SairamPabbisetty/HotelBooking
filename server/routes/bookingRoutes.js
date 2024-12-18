const express = require('express');
const router = express.Router();
const Booking = require('../models/bookings')

router.post('/', (req, res) => {
    const {userEmail, checkInDate, checkOutDate, roomType, numberOfGuests} = req.body;

    console.log(req.body);
    const booking = new Booking({
        userEmail,
        checkInDate,
        checkOutDate,
        roomType,
        numberOfGuests
    });

    booking
        .save()
        .then((data) => {
            res.redirect("http://localhost:3000/history")
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find(); 
        
        res.json({
            data: bookings
        });
    } catch (err) {
        console.error(err);
        res.json({
            error: err
        });
    }
});


module.exports = router;
