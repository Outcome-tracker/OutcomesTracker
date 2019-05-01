const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

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



router.get("/new", isAuth, checkRoles("OUTCOMESLEAD"), (req, res) => {
    res.render("employee-form");
});

router.post("/new", (req, res) => {
    Employee.create(req.body)
        .then(() => {
            res.redirect("/outcomeslead");
        });
});

router.get('/:id/edit', (req, res) => {
    let { id } = req.params;
    Employee.findById(id)
        .then(empleado => {
            res.render('employee-form', empleado);
        });
});

router.post('/:id/edit', (req, res) => {
    let { id } = req.params;
    Employee.findByIdAndUpdate(id, { $set: {...req.body } })
        .then(empleado => {
            res.redirect('/outcomeslead');
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/:id/delete', (req, res) => {
    let { id } = req.params;
    Employee.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/outcomeslead');
        });
});

module.exports = router;