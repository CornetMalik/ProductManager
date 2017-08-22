var app = angular.module('myapp', [require('angular-route'),'angularUtils.directives.dirPagination']);

app.config(function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "views/home.html",
		controller : "homeCtrl"
	})
	.when("/customers", {
		templateUrl : "views/customers.html",
		controller : "customerCtrl"
	})
	.when("/customers/:id", {
		templateUrl : "views/customers.html",
		controller : "customerCtrl"
	})
	.when("/customers/new", {
		templateUrl : "views/newcustomer.html",
		controller : "newcustomerCtrl"
	})
	.when("/products", {
		templateUrl : "views/products.html",
		controller : "homeCtrl"
	})
	.when("/sales", {
		templateUrl : "views/sales.html",
		controller : "homeCtrl"
	})
	.when("/vendors", {
		templateUrl : "views/vendors.html",
		controller : "homeCtrl"
	})
	.when("/settings", {
		templateUrl : "views/settings.html",
		controller : "homeCtrl"
	})
	.otherwise({redirectTo: '/home'})
});
