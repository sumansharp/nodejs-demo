var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Customer App' });
  //res.redirect ('/index.html');
  res.redirect ('/login');
});

router.get('/dashboard', function(req, res, next) {
  res.render('sample', { title: 'Dashboard' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('sample', { title: 'Dashboard' });
});
module.exports = router;
