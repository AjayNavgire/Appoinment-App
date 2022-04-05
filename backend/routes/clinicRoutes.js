const express = require("express");
const { createClinic, getAllClinic } = require("../controller/clinicController");
const router = express.Router();


router.route("/clinic").post(createClinic)
router.route("/clinicList").get(getAllClinic)

module.exports = router;