moudule.exports = function(){app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/allFriends.html'
    }).when('/create', {
        templateUrl:'partials/createFriend.html'
    }).when('/friends/:id', {
        templateUrl:'partials/oneFriend.html'
    })
})}()
