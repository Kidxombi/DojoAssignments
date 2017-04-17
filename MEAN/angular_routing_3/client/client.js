var app = angular.module('app', ['ngRoute']);


app.factory('theFactory', function(){
    var users = [];
    var factory = {};
    factory.read = function(callback){
        callback(users)
    }
    factory.create = function(obj){
        users.push(obj)
    }
    factory.destroy = function(obj){
        users.splice(users.indexOf(obj), 1);
    }
    return factory;
});

// Edit
app.controller('view1Controller', function(theFactory, $location){
    var self = this;
    theFactory.read(function(data){
        self.users = data;
    })
    this.create = function(){
        theFactory.create(this.newUser);
        $location.url('/partial2')
    }
    this.destroy = function(obj){
        theFactory.destroy(obj);
    }

})

// Show
app.controller('view2Controller', function(theFactory){
    var self = this;
    theFactory.read(function(data){
        self.users = data;
    })

})

// Routes
app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/view1.html',
    }).when('/partial2', {
        templateUrl: 'partials/view2.html',
    }).otherwise({
        redirectTo:'/'
    })
});
