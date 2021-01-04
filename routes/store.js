const express = require("express");
const router = express.Router();

const storeController = require("../controllers/store");
router.get("/store", storeController.getStorePage);

module.exports = router;
