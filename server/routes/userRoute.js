const express = require('express');
const User = require('../schema/userSchema');
const router = express.Router();
const jwt = require("jsonwebtoken");
const keysecret = "durgeshchaudharydurgeshchaudhary"
const bcrypt = require('bcryptjs');

// signup API path /user/signup

router.post('/signup', async (req, res) => {
    // destructure the value of name, email, password form frontend(req.body)
    const { username, phone, email, password, type } = req.body;
    try {
        // hash the password using salt of 10
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        // check data is present 
        const savedEmail = await User.findOne({ email: email })
        // if data exist than return error 
        if (savedEmail) {
            res.status(404).json({ error: "This Email is Already Exist" });
        } else {
            // else condition me save the userdata
            const data = new User({username, email, password: pass, type,phone})
            // save user data using .save method
            const user = await data.save()
             // create token using secret key
             const userdata = {
                user: {
                    id: user.id
                }
            }
            // generate token using userid and secret key
            let token = jwt.sign(userdata, keysecret);
            // return the backend status to frontend
            res.status(201).json({ status: 201, token, user })
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})


module.exports = router;