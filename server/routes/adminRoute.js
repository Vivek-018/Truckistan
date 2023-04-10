const express = require('express');
const router = express.Router();
const Driver = require("../schema/driverSchema");
const User = require("../schema/userSchema")

router.put("/changeIsVerified/:id", (req, res) => {
    Driver.findOneAndUpdate({ _id: req.params.id }, { $set: { isVerified: req.body.isVerified } })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

router.get("/UserDataAtAdmin/:id", (req, res) => {
    User.find({ _id: req.params.id })
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

router.delete("/driversAndTrucks/:id", async (req, res) => {
    try {
        const deleted = await Driver.findByIdAndDelete({ _id: req.params.id })
        res.status(201).json(deleted);
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

module.exports = router
