const express = require('express');
const driverSchema = require("../schema/driverSchema");
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')

router.post('/driverData', fetchuser, async (req, res) => {
    const { name, lname, gender, DOB, email, phone, PanCardNumber, address,
        city, state, pincode, country, basefare, bodysize, lodingCapacity,
        transName, Vnamber, DLnumber, RCnumber, PolutionCertificate, driverImage,
        VehicleImage, DLImage, RCImage, } = req.body;
    if (!Vnamber === '') {
        res.status(404).send("Vehicle Number is Not found");
    }
    try {

        const checkVehicleNumber = await driverSchema.findOne({ Vnamber: Vnamber });
        if (checkVehicleNumber) {
            res.status(404).json({ error: "This Vehicle Number is Already Exist" });
        } else {

            const data = new driverSchema({
                driverId: req.user.id, name, lname, gender, DOB, email, phone, PanCardNumber, address,
                city, state, pincode, country, basefare, bodysize, lodingCapacity,
                transName, Vnamber, DLnumber, RCnumber, PolutionCertificate, driverImage,
                VehicleImage, DLImage, RCImage,
            })
            const saveddata = await data.save()
            // return the backend status to frontend
            res.status(201).json({ status: 201, saveddata })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;
