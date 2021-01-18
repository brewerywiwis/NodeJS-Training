const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

router.get("/login", authController.getLoginPage);
router.post("/login", authController.postLoginPage);

router.get("/signup", authController.getSignUpPage);
router.post("/signup", authController.postSignUpPage);

router.get("/logout", authController.getLogOutPage);
// router.post("/logout", authController.postSignUpPage);

module.exports = router;
