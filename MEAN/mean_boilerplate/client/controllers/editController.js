app.controller('editController', function(friendFactory, $routeParams, $location){
    var self = this;
    var id = $routeParams.id;
    friendFactory.getFriend(id, function(data){
        self.friend = data;
        self.friend.bday = new Date(self.friend.bday)
    });
    this.update = function(){
        friendFactory.update(this.friend);
        $location.url('/');
    }
});
