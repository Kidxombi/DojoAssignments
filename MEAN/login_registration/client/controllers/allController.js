app.controller('allController', function(userFactory, $location){
    var self = this;
    userFactory.index(function(data){
        self.users = data;
    });

    this.delete = function(id){
        userFactory.delete(id);
        userFactory.index(function(data){
            self.users = data;
        });
    }

    this.show = function(id){
        $location.url('/show/'+id);
    }
    this.edit = function(id){
        $location.url('/edit/'+id);
    }

})
