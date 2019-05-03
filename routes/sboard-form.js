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

router.post("/:id/edit", isAuth, helpers.isAuth, uploader.single("image"), (req, res) => {
    const { id: _id } = req.params;
    const { email } = req.user;
    //const { url: image } = req.files;
    const img = req.file ? req.file.url : undefined;
    const user = img ? {...req.body, img } : req.body
    console.log('Que', user)
    User.findOneAndUpdate({ _id, email }, { $set: user })
        .then(() => {
            res.redirect("/student");
        })
        .catch(err => {
            res.render("sboard-form", { err });
        });
});

module.exports = router;