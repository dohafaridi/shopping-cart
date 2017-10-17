var express = require('express');
var router = express.Router();
var csrf = require('csurf');

router.get('/signup', function (req, res, next) {
  res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/signup', function (req, res, next) {
  res.redirect('/');
});

module.exports = router;
