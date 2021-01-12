const express = require("express");
const router = express.Router();

const signupController = require("../controllers/signup");

router.get("/signup", signupController.getSignUpPage);
router.post("/signup", signupController.postSignUpPage);

module.exports = router;
