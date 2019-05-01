const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/home', (req, res, next) => {
    res.render('home');
});

router.get('/student-board', (req, res, next) => {
  res.render ('student-board');
});

router.get('/sboard-form', (req, res, next) => {
  res.render ('sboard-form');
});



module.exports = router;