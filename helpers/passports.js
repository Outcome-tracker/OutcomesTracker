const passport = require("passport");
const Administrator = require("../models/Administrator");

passport.use(new LocalStrategy(Administrator.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


