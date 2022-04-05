const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please Enter User Name"],
        trim: true
    }
})

module.exports = mongoose.model("User",userSchema)