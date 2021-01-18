const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");

const storeController = require("../controllers/store");
router.get(
  "/store",
  authentication.isAuthentication,
  storeController.getStorePage
);

module.exports = router;
