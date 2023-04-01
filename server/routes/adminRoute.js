const express = require('express');
const router = express.Router();
const Driver = require("../schema/driverSchema");
const User = require("../schema/userSchema")

router.put("/changeIsVerified/:id",(req, res) => {
    Driver.findOneAndUpdate({ _id: req.params.id }, {$set:{ isVerified: req.body.isVerified }})
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

router.get("/UserDataAtAdmin/:id", (req, res)=>{
    User.find({_id:req.params.id})
    .then((response)=>{
         res.json(response);
    })
    .catch((err)=>{
        res.status(400).json(err);
    })
})

module.exports = router
