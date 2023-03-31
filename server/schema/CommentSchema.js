const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userId:{
       type: mongoose.Schema.Types.ObjectId,
       required:true

    },
    desc: {
        type: String,
        required:true
    },
    rating:{
        type:Array,
        required:false
    }

})

module.exports = mongoose.model("Comments", commentSchema);