app.controller('editController', function(userFactory, $routeParams, $location){
    var self = this;
    var id = $routeParams.id;
    userFactory.getuser(id, function(data){
        self.user = data;
        self.user.bday = new Date(self.user.bday)
    });
    this.update = function(){
        userFactory.update(this.user);
        $location.url('/');
    }
});
