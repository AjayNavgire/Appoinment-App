const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please Enter Clinic Name"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Please Enter Clinic Address"]
    }
})

module.exports = mongoose.model("Clinic",clinicSchema)