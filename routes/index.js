var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs) => {
    res.render('shop/index', { title: 'Shopping cart', products: docs });
  });

});

module.exports = router;
