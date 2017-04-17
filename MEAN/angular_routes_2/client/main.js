var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl:'partials/view1.html',
        controller:'view1Controller'
    }).when('/partial2', {
        templateUrl:'partials/view2.html',
        controller:'view2Controller'
    }).otherwise({
        redirectTo:'/'
    })
})

app.controller('view1Controller', function(){
    this.sports = ['golf', 'basketball', 'hockey', 'tennis', 'football'];
});

app.controller('view2Controller', function(){
    
})
