const express = require("express");
const { createDoctor, getAllDoctor } = require("../controller/doctorController");
const router = express.Router();


router.route("/doctor").post(createDoctor)
router.route("/doctorList").get(getAllDoctor)

module.exports = router;