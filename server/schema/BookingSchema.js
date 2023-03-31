const mongoose = require("mongoose")

const bookingSchema = new mongosse.Schema({
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongosse.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: [
            "Selected",
            "applied",
            "Confirmed",
            "Cancel"
        ]
    }

})

module.exports = mongosse.model("booked", bookingSchema);
