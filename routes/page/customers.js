var express = require('express');
var router = express.Router();
var service = require('../../services/customer-service');

/* GET Customers page. */
router.get('/', function(req, res, next) {
  res.render('customers', 
  	{ title: 'Customers',data:service.getCustomers()});
  //res.redirect ('/index.html');
});

router.get('/name/:text', function(req, res) {
 res.render('customers', 
  	{ title: 'Customers',data:service.getCustomersByName(req.params.text)});
})
//add
router.get('/add', function(req, res) {
  res.render('add-customer', 
  	{ title: 'Add Customer'});
})

router.get('/edit/:id', function(req, res) {
  console.log("id is "+req.params.id);
  res.render('edit-customer', 
  	{ title: 'Update Customer', data:service.getCustomerById(req.params.id)});
});
module.exports = router;
