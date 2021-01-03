const express = require("express");
const rootDir = require("../utils/path");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home");
});

module.exports = router;
