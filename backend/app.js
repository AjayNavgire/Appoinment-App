const express = require("express");
const app = express();


const errorMiddleware = require("./middleware/error");

app.use(express.json())

// Route Imports
const user = require("./routes/userRoutes")
const doctor = require("./routes/doctorRoutes")
const clinic = require("./routes/clinicRoutes")
const appointment = require("./routes/appointmentRoutes")



app.use("/api/v1", user)
app.use("/api/v1",doctor)
app.use("/api/v1",clinic)
app.use("/api/v1",appointment)

// Middleware for Errors
app.use(errorMiddleware)


module.exports = app;