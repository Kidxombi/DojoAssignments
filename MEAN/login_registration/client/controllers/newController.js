app.controller('newController', function(userFactory, $location){
    this.create = function(){
        userFactory.create(this.newuser);
        $location.url('/');
    }
})
