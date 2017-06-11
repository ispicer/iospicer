var app = angular.module('app', ['ngRoute']);

app.config(
  function($routeProvider) {
    $routeProvider
    	.when('/', {
        	templateUrl: 'index.html',
		})
    	.when('/portraits', {
        	templateUrl: 'partials/portraits.html',
    	})
      	.when('/scenic', {
      		templateUrl: 'partials/scenic.html',
      	})
      	.when('/creative', {
        	templateUrl: 'partials/creative.html',
    	});
      });