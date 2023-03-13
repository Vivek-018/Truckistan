const express = require('express');
const User = require('../schema/userSchema');
const router = express.Router();
const jwt = require("jsonwebtoken");
const keysecret = "durgeshchaudharydurgeshchaudhary"
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
const localVariables = require("../middleware/fetchuser")
// email config
const trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "durgeshchaudhary020401@gmail.com",
        pass: "lqfxwpogsaocehjc"
    }
})

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
            const data = new User({ username, email, password: pass, type, phone })
            // save user data using .save method
            const user = await data.save()
            // create token using secret key
            const userdata = {
                user: {
                    id: user.id
                }
            }
            // generate token using userid and secret key
            let token = jwt.sign(userdata, keysecret)
            console.log(user)
            // const oken = await User({token:token})
            // const Savetoken = await setToken.save()
            // return the backend status to frontend
            if (token && user) {
                res.status(201).json({ status: 201, token, user })
            } else {
                res.status(401).send("Some error occured")
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        //  check entered eamil is valid or not
        const user = await User.findOne({ email: email });
        if (user) {
            // after validation email check for password compare password with users entered password
            const Ismatch = await bcrypt.compare(password, user.password);

            if (!Ismatch) {
                res.status(422).json({ error: "invalid details" })
            } else {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                let token = jwt.sign(data, keysecret);
                res.status(201).json({ status: 201, user, token })
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

router.get('/generateOTP', fetchuser, localVariables, async (req, res) => {
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
    res.status(201).send({ code: req.app.locals.OTP })
})

router.get('/verifyOTP', fetchuser, localVariables, async (req, res) => {
    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null; // reset otp value
        req.app.locals.resetSession = true // start session for reset password
        return res.status(201).send({ msg: 'Verify Successfully' })
    }
    return res.status(400).send({ error: "Invalid OTP" })
})

router.get('/createResetSession', async(req, res)=>{
      if(req.app.locals.resetSession){
        req.app.locals.resetSession = false;
        return res.status(201).send({msg:"access granted!"})
      }
      return res.status(404).send({error:"Session expired "})
})

router.put('/resetPassword', async(req, res)=>{
    try {
        const {email} = req.body;

        try {
            User.findOne({email})
            .then()
            .catch((error)=>{
                return res.status(404).send({error:"email is not found"})
            })
        } catch (error) {
            return res.status(404).send({error:"Some error occured"}) 
        }
    } catch (error) {
        return res.status(404).send({error:"Some error occured"})
    }
})

router.get('/getUserData', fetchuser, async (req, res) => {
    const user = req.user;
    try {
        const data = await User.findOne({ _id: user.id });
        res.json(data)
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

module.exports = router;