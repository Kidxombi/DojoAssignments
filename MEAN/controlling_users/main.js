var app = angular.module('app', []);
app.controller('theController', function(){
    this.users = [];
    this.addUser = function(){
        console.log(this.newUser);
        this.users.push(this.newUser);
        this.newUser = {};
    }
    this.removeUser = function(user){
        for (var i=0; i < this.users.length; i++) {
            if (this.users[i] === user) {
                this.users.splice(i, 1);
            }
        }
    }
})
