app.controller('newController', function(friendFactory, $location){
    this.create = function(){
        friendFactory.create(this.newFriend);
        $location.url('/');
    }
})
