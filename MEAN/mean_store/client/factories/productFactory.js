app.factory('productFactory', function($http){

    var factory = {};
    factory.index = function(callback){
        $http.get('/products').then(function(response){
            console.log('got products')
            callback(response.data.products);
        }).catch(function(error){
            console.log(error)
        })
    }

    factory.create = function(obj){
        $http.post('/products', {product:obj}).then(function(response){
            console.log(response.data);
        })
    }

    factory.delete = function(id){
        $http.delete('/products/'+id).then(function(response){
            console.log(response);
        })
    }




    return factory;

});
