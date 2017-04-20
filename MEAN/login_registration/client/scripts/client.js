var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'partials/login.html'
    })
    .when('/reg', {
        templateUrl:'partials/reg.html'
    })
    .when('/edit/:id', {
        templateUrl:'partials/edit.html'
    })
    .when('/show/:id', {
        templateUrl:'partials/show.html'
    })
    .otherwise({
        redirectTo:'/'
    })
});
