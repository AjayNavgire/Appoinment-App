const User = require("../model/userModel")
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");



// Create User 
exports.createUser = catchAsyncError(async (req, res, next) => {
   
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        user
    })
})

// Get All User
exports.getAllUser = catchAsyncError(async (req, res) => {

    
    const user = await User.find()

    res.status(200).json({
        success: true,
        user
    })
})