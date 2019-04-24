const passport = require("passport");
const Administrator = require("../models/Administrator");

passport.use(new LocalStrategy(Administrator.authenticate()));

passport.serializeUser(Administrator.serializeUser());
passport.deserializeUser(Administrator.deserializeUser());


