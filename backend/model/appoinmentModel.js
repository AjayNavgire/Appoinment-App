const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Please enter User "]
    },

    doctor: {
        type: mongoose.Schema.ObjectId,
        required:[true, "Please enter  Doctor"]
    },

    clinic: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please enter  clinic"]
    },
    appointmentDate: {
        type: Date,
        required: [true, "Please enter  Appointment Date"]
    },
    appointmentType: {
        type: String,
        required: [true, "Please enter Appoinment Type"]
    },
    firstName: {
        type: String,
        required: [true, "Please enter First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter Last Name"]
    },
    bookingDate: {
        type: Date,
        default: Date.now
    },
    address: [
        {
            city: {
                type: String,
                required: [true, "Please Enter City"]
            },
            state: {
                type: String,
                required: [true, "Please Enter State"]
            },
            pincode: {
                type: Number,
                required: [true, "Please Enter Pincode"]
            },
            country: {
                type: String,
                required: [true, "Please Enter Country"]
            }
        }
    ],
    details: [
        {
            bp: {
                type: String,
                required: [true, "Please Enter bp"]
            },
            plus: {
                type: String,
                required: [true, "Please Enter plus"]
            },
            spo2: {
                type: String,
                required: [true, "Please Enter spo2"]
            },
            temp: {
                type: String,
                required: [true, "Please Enter temp"]
            },
            weight: {
                type: String,
                required: [true, "Please Enter weight"]
            },
            height: {
                type: String,
                required: [true, "Please Enter height"]
            },
            note: {
                type: String,
             
            }
        }
    ]

})

module.exports = mongoose.model("appoinment", appointmentSchema)