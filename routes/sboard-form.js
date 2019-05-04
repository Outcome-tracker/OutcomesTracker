const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/auth/login");
    }
};

router.get("/", isAuth, (req, res) => {
    const { user } = req;
    res.render("sboard-form", { user });
});

router.post("/:id/edit", isAuth, helpers.isAuth, (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;
    let skill1 = user.skill1;
    User.findOneAndUpdate({ _id }, { $set: user })
        .then(() => {
            res.redirect("/student");
        })
        .catch(err => {
            res.render("sboard-form", { err });
        });
});

module.exports = router;