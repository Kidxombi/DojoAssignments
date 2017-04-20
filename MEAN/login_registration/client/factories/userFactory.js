app.factory('userFactory', function($http){

    var users;
    var factory = {};

    factory.index  = function(callback){
        $http.get('/users', {}).then(function(response){
            if (response.data.success) {
                users = response.data.users;
                callback(users)
            } else {
            }
        })
    }
    factory.getuser = function(id, callback){
        for (i in users) {
            if (users[i]._id == id) {
                callback(users[i])
                break;
            }
        }
    };

    factory.create = function(obj){
        $http.post('/users', obj).then(function(response){

        })
    }

    factory.delete = function(id){
        var self = this;
        $http.post('/users/destroy', {user_id:id}).then(function(response){

        })

    }
    factory.update = function(obj){
        $http.post('/users/update', {user:obj}).then(function(response){

    })
}
    factory.login = function(obj){
        for (i in users) {
            if (users[i].email == obj.email) {
                if () {}
            }
        }
    }



    return factory
})
