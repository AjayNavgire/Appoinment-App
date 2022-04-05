const express = require("express");
const { createAppoitnment } = require("../controller/appointmentController");
const router = express.Router();


router.route("/appointment").post(createAppoitnment)

module.exports = router;