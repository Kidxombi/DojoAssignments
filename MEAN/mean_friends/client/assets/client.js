var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/allFriends.html'
    }).when('/create', {
        templateUrl:'partials/createFriend.html'
    }).when('/friends/:id', {
        templateUrl:'partials/oneFriend.html'
    })
});



app.factory('theFactory', function($http){
    var factory = {};
    factory.serve = function(callback){

        $http.get('/friends', {}).then(function(res){

            callback(res.data.friends)
        }, function() {

        })
    }

    factory.create = function(friend){
        $http.post('/friends', friend).then(function(success){

        }, function(fail){

        })
    }


    return factory;
})

var oneF;
app.controller('friendController', function(theFactory, $location, $routeParams){
    var self = this;
    theFactory.serve(function(data){
        console.log('*******');
        self.oneFriend = oneF;
        self.friendsList = data;
    });
    this.create = function(){
        theFactory.create(this.newFriend);
        $location.url('/')
    }
    this.show = function(id){
        console.log(id);
        for (i in this.friendsList) {
            console.log(this.friendsList[i]);
            if (this.friendsList[i]._id == id) {
                console.log("this equal");
                this.oneFriend = this.friendsList[i];
                oneF = this.oneFriend
            }
        }
        $location.url('/friends/'+id);
        console.log(this.oneFriend, "one friend");
    }

})
