const Doctor = require("../model/doctorModel")
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");



// Create Doctor 
exports.createDoctor = catchAsyncError(async (req, res, next) => {
   
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
        success: true,
        doctor
    })
})

// Get All Doctor
exports.getAllDoctor = catchAsyncError(async (req, res) => {

    
    const doctor = await Doctor.find()

    res.status(200).json({
        success: true,
        doctor
    })
})