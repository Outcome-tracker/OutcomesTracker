const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render("auth-form", {action: "Login"});
});

router.get("/register", (req, res) => {
  res.render("auth-form", {action: "Register"});
})

//Creacion de rutas para recibir la data y utilizamos passport local mongoose

router.post("/register", (req, res) => {
  console.log(req.body);
  /*User.registrer(req.body)
  .then(user => {
    console.log(user)
  })*/
});

module.exports = router;

