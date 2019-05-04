const express = require("express");
const router = express.Router();
const User = require("../models/User");

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/auth/login");
};


function checkRoles(role) {
    return function(req, res, next) {
        if (req.isAuthenticated() && req.user.role === role) {
            return next();
        } else {
            res.redirect("/main");
        }
    };
}

router.get("/new", (req, res) => {
    res.render("sboard-form");
});

router.post("/new", (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(() => {
            console.log("entro")

        }).catch(e =>
            console.log("error:", e)
        );
});

router.get('/:id/edit', (req, res) => {
    let { id } = req.params;
    User.findById(id)
        .then(alumno => {
            console.log('alumno', alumno)
            res.render('sboard-form', alumno);
        });
});

router.post('/:id/edit', (req, res) => {
    let { id } = req.params;
    User.findByIdAndUpdate(id, { $set: {...req.body } })
        .then(user => {
            res.status(200)
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/:id/delete', (req, res) => {
    let { id } = req.params;
    User.findByIdAndDelete(id)
        .then(() => {
            res.status(200)
        });
});

module.exports = router;