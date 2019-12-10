var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/abc', function(req, res, next) {
  res.send('respond with a resource abc');
});

router.post('/login', function(req, res, next) {
  console.log('req.body');
  console.log(JSON.stringify(req.body));
  if(req.body.username == req.body.password){
  	res.send({result:'success',msg:'login successful'});
  }else{
  	res.send({result:'fail',msg:'login failed'});
  }
});

module.exports = router;
