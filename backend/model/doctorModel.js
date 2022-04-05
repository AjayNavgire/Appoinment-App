const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please Enter Doctor Name"],
        trim: true
    }
})

module.exports = mongoose.model("Doctor",doctorSchema)