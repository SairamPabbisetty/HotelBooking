const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    const { firstName, lastName, mobile, email, password } = req.body;

    const newUser = new User({
        firstName,
        lastName,
        mobile,
        email,
        password
    });

    newUser
        .save()
        .then((data) => {
            res.redirect("http://localhost:3000/login");
        })
        .catch((err) => console.log(err));
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.send({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.send({ message: 'Invalid password' });
        }
        
        res.send({
            firstName: user.firstName,
            lastName: user.lastName,
            mobile: user.mobile,
            email: user.email
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});


module.exports = router;
