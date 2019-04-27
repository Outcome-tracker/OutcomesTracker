const express = require("express");
const router  = express.Router();

/* para ver la vista del usuario  */

const isAuth = (req,res,next) => {
  if (req.isAuthenticated()) {
    next ();
  } else {
    res.redirect("/auth/login");
  }
};

router.get("/",isAuth, (req, res) => {
  const { user }= req;
  res.render("profile", { user });
});


module.exports = router;
