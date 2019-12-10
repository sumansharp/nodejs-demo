var express = require('express');
var service = require('../../services/customer-service');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(service.getCustomers());
});

router.post('/', function(req, res, next) {
	service.addCustomer(req.body);
	res.send({result:'success', msg:'customer added successfully.'});
});

router.put('/', function(req, res, next) {
	service.updateCustomer(req.body);
	res.send({result:'success', msg:'customer added successfully.'});
});

router.delete('/', function(req, res, next) {
	service.deleteCustomer(req.body);
	res.send({result:'success', msg:'customer added successfully.'});
});

module.exports = router;
