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
const Mailgen = require("mailgen");


// email config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "durgeshchaudhary020401@gmail.com",
        pass: "lqfxwpogsaocehjc"
    }
})

let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: "https://mailgen.js/"
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


router.post('/generateOTP',async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email: email });
    if(user){
        req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
        console.log(req.app.locals.OTP)
        res.status(201).send({ code: req.app.locals.OTP, user })
    }else{
        return res.status(400).send({ error: "Email does not exist"})
    }
})


router.post("/sendMail", async (req, res) => {
    const { email, text, subject } = req.body;

    var Useremail = {
        body: {
            intro: text || "Welcome to Vahak",
            outro: 'Need help, or have questio? Just reply to this email'
        }
    }

    var emailBody = MailGenerator.generate(Useremail);
    let message = {
        from: " durgeshchaudhary020401@gmail.com",
        to: email,
        subject: subject || "Signup successful",
        html: emailBody
    }

    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from us. " })
        })
    //    .catch(err=>res.status(404).send({err}))
})


router.get('/createResetSession', async (req, res) => {
    if (req.app.locals.resetSession) {
        req.app.locals.resetSession = false;
        return res.status(201).send({ msg: "access granted!" })
    }
    return res.status(404).send({ error: "Session expired " })
})

router.put('/resetPassword', fetchuser, async (req, res) => {
    try {

        if (!req.app.locals.resetSession) {
            return res.status(404).send({ error: "Session expired " })
        }
        const { email, password } = req.body;
        try {
            User.findOne({ email })
                .then(user => {
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {
                            User.updateOne({ email: user.email },
                                { password: hashedPassword }, function (err, data) {
                                    if (err) throw err;
                                    req.app.locals.resetSession = false
                                    return res.status(201).send({ msg: "Record Updated" })
                                });
                        })
                        .catch(e => {
                            return res.status(500).send({
                                error: "Enable to hashed Password"
                            })
                        })
                })
                .catch((error) => {
                    return res.status(404).send({ error: "email is not found" })
                })
        } catch (error) {
            return res.status(404).send({ error: "Some error occured" })
        }
    } catch (error) {
        return res.status(404).send({ error: "Some error occured" })
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

router.put("/editUserProfiledata/:id", async (req, res) => {
    const { username, link, email, phone } = req.body;
    try {
        const newData = {};
        if (username) {
            newData.username = username.value
        }
        if (email) {
            newData.email = email.value
        }
        if (phone) {
            newData.phone = phone.value
        }
        if (link) {
            newData.link = link.link
        }
        const save = await User.findByIdAndUpdate({ _id: req.params.id },
            { $set: newData }, { new: true })
        res.status(201).json({ status: 201, save });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;