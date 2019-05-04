const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/outcomes-view", (req, res, next) => {
  res.render("outcomes-view");
});

module.exports = router;
