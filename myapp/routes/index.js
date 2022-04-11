var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detail1', function(req, res, next) {
  res.render('productDetail1', { title: 'Express' });
});
module.exports = router;
