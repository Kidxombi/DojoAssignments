app.factory('customerFactory', function($http){

    var factory = {};
    factory.index = function(callback){
        $http.get('/customers').then(function(response){
            customers = response.data.customers;
            callback(response.data.customers);
        }).catch(function(error){
            console.log(error)
        })
    }

    factory.getOrders = function(callback){
        $http.get('/customers/order', {}).then(function(response){
            console.log(response.data.orders);
            callback(response.data.orders);
        })
    }

    factory.create = function(obj){
        $http.post('/customers', {customer:obj}).then(function(response){

        })
    }

    factory.delete = function(id){
        $http.delete('/customers/'+id).then(function(response){

        })
    }

    factory.order = function(obj){
        console.log("order object ------- ", obj);
        $http.post('/customers/order', obj).then(function(response){
            console.log(response);
        })
    }




    return factory;


})
