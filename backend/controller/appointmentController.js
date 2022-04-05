const Appoinment = require("../model/appoinmentModel")
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");



// Create Appoinment
exports.createAppoitnment = catchAsyncError(async (req, res, next) => {

    const {
        user,
        doctor,
        clinic,
        appointmentDate,
        appointmentType,
        firstName,
        lastName,
        address,
        city,
        state,
        pincode,
        country,
        details,
        bp,
        plus,
        spo2,
        temp,
        weight,
        height,
        note

    } = req.body;

    const appoinment = await Appoinment.create({
        user,
        doctor,
        clinic,
        appointmentDate,
        appointmentType,
        firstName,
        lastName,
        bookingDate:Date.now(),
        address,
        city,
        state,
        pincode,
        country,
        details,
        bp,
        plus,
        spo2,
        temp,
        weight,
        height,
        note
    });

    res.status(201).json({
        success: true,
        appoinment
    })

})
