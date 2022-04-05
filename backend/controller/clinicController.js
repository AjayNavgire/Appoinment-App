const Clinic = require("../model/clinicModel")
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");



// Create Clicnic
exports.createClinic = catchAsyncError(async (req, res, next) => {
   
    const clinic = await Clinic.create(req.body);

    res.status(201).json({
        success: true,
        clinic
    })
})

// Get All Clinic
exports.getAllClinic = catchAsyncError(async (req, res) => {

    
    const clinic = await Clinic.find()

    res.status(200).json({
        success: true,
        clinic
    })
})