const express = require("express");
const router = express.Router();
const User = require("../models/User");


/* para ver la vista del usuario  */

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

router.get("/", isAuth, (req, res) => {
  const { user } = req;
  res.render("profile", { user });
});

//ruta para profile-perfil del usuario
router.get("/:id/edit", isAuth, (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.render("profile-form", { user });
    })
    .catch(err => {
      res.render("profile-form", { err });
    });
});

router.post("/:id/edit", isAuth, (req, res) => {
  const { id } = req.params;
  User.findOneAndUpdate({ $set: req.body })
    .then(() => {
      res.redirect("/profile");
    })
    .catch(err => {
      res.render("profile-form", { err });
    });
});

module.exports = router;
