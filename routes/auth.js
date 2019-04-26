const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth-form");
});

router.get("/register", (req, res) => {
  res.render("auth-form");
})

module.exports = router;

