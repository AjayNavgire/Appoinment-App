const express = require("express");
const { createUser, getAllUser } = require("../controller/userController");
const router = express.Router();


router.route("/user").post(createUser)
router.route("/userList").get(getAllUser)

module.exports = router;