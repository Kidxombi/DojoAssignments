app.controller('loginController', function(userFactory, $location){
    this.login = function(){
        userFactory.login(this.user);
    }
})
