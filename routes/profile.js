const express = require("express");
const router  = express.Router();

/* para ver la vista del usuario  */

const isAuth = (req,res,next) => {
  if (req.isAuthenticated()) {
    next ();
  } else {
    res.redirect("/login");
  }
};

router.get("/",isAuth, (req, res) => {
  res.render("profile");
});


module.exports = router;
