var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detail1', function(req, res, next) {
  res.render('productDetail1', { title: 'Express' });
});
router.get('/detail2', function(req, res, next) {
  res.render('productDetail2', { title: 'Express' });
});
router.get('/detail3', function(req, res, next) {
  res.render('productDetail3', { title: 'Express' });
});
router.get('/detail4', function(req, res, next) {
  res.render('productDetail4', { title: 'Express' });
});
router.get('/detail5', function(req, res, next) {
  res.render('productDetail5', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/productCart', function(req, res, next) {
  res.render('productCart', { title: 'Express' });
});
router.get('/reestablecer', function(req, res, next) {
  res.render('reestablecer', { title: 'Express' });
});
router.get('/productCreate', function(req, res, next) {
  res.render('productCreate', { title: 'Express' });
});



module.exports = router;
