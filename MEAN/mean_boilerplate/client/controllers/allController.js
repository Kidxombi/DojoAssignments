app.controller('allController', function(friendFactory, $location){
    var self = this;
    friendFactory.index(function(data){
        self.friends = data;
    });
    
    this.delete = function(id){
        friendFactory.delete(id);
        friendFactory.index(function(data){
            self.friends = data;
        });
    }

    this.show = function(id){
        $location.url('/show/'+id);
    }
    this.edit = function(id){
        $location.url('/edit/'+id);
    }

})
