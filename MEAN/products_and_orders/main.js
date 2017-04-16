var app = angular.module('app', []);

app.factory('theFactory', function(){
    var products = [];

    var factory = {};

    factory.get = function(callback){
        callback(products)
    }
    factory.create = function(obj){
        products.push(obj)
    }
    factory.delete = function(obj){
        products.splice(products.indexOf(obj), 1);
    }
    factory.buy = function(obj){
        if (products[products.indexOf(obj)].amount > 0) {
            products[products.indexOf(obj)].amount -= 1;
        }
    }

    return factory;
})

app.controller('productController', function(theFactory){
    var self = this;
    theFactory.get(function(data){
        self.products = data;
    })

    this.create = function(){
        if (self.newProduct.price == ""){
            self.newProduct.price = 0;
        }
        self.newProduct.amount = 50;
        theFactory.create(self.newProduct)
        self.newProduct = {};
    }
    this.delete = function(obj){
        theFactory.delete(obj);
    }


})


app.controller('orderController', function(theFactory){
    var self = this;
    theFactory.get(function(data){
        self.products = data;
    })
    this.buy = function(obj){
        theFactory.buy(obj);
    }
})
