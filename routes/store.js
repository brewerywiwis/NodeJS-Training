const express = require("express");
const rootDir = require("../utils/path");
const path = require("path");
const router = express.Router();

router.get("/store", (req, res, next) => {
  res.render("store");
});
module.exports = router;
