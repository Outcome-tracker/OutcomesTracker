const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("auth-form", { action: "Login"});
});

router.get("/register", (req, res) => {
  res.render("auth-form");
});

router.post("/login", passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/auth/login",
  failWithError: true
  })
);

//Creacion de rutas para recibir la data y utilizamos passport local mongoose

router.post("/register", (req, res) => {
  const { password } = req.body;
  /*delete req.body.password;*/

  User.register(req.body, password)
    .then(() /*user*/ => {
      /*console.log(user);*/ 
      res.redirect("/login");
    })
    .catch(err => {
      /*console.log(err);*/
      res.render("auth-form", { err, action: "Register" });
    }); 
});


router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;

