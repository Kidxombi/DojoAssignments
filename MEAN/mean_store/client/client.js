var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'./partials/customers.html'
    })
    .when('/products', {
        templateUrl:'./partials/products.html'
    })
    .when('/orders', {
        templateUrl:'./partials/orders.html'
    })
})
