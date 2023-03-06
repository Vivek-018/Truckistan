const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
     driverId:{
        type:String,
     }
})

module.exports = mongoose.module("driverSchema", driverSchema);