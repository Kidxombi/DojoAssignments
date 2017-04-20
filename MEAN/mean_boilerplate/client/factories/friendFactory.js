app.factory('friendFactory', function($http){

    var friends;
    var factory = {};

    factory.index  = function(callback){
        $http.get('/friends', {}).then(function(response){
            if (response.data.success) {
                friends = response.data.friends;
                callback(friends)
            } else {
            }
        })
    }
    factory.getFriend = function(id, callback){
        for (i in friends) {
            if (friends[i]._id == id) {
                callback(friends[i])
                break;
            }
        }
    };

    factory.create = function(obj){
        $http.post('/friends', obj).then(function(response){

        })
    }

    factory.delete = function(id){
        var self = this;
        $http.post('/friends/destroy', {friend_id:id}).then(function(response){

        })

    }
    factory.update = function(obj){
        $http.post('/friends/update', {friend:obj}).then(function(response){

    })
}



    return factory
})
