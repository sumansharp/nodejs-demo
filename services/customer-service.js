var customerService = {};

var customers = [
{id:"1", 
name:"Vivek", 
email:"vivek@gmail.com",
phone:"87654 67676",
address:"India"
},
{id:"2",name:"Vivek K",
 email:"rama@gmail.com",
 phone:"89885 67676",
 address:"India"
},
{id:"2",name:"Rama",
 email:"rama@gmail.com",
 phone:"89885 67676",
 address:"India"
},
];

customerService.getCustomers =function(){
	return customers;
}
customerService.getCustomersByName =function(searchName){
	let newList = [];
	searchName = searchName.toLowerCase();
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].name.toLowerCase().startsWith(searchName)){
			newList.push(customers[i]);
		}
	}
	return newList;
}
customerService.addCustomer =function(customer){
	let d = new Date(); 
	customer.id = d.getTime(); 
	customers.push(customer);
}

customerService.getCustomerById =function(id){
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id == id){
			return customers[i];
		}
	}
	return {};
}

customerService.updateCustomer = function(customer){
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id == customer.id){
			customers[i] = customer;
			return;
		}
	}
}

customerService.deleteCustomer =function(customer){
	let newList = [];
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id != customer.id){
			newList.push(customers[i]);
		}
	}
	customers=newList;
}

module.exports=customerService;










