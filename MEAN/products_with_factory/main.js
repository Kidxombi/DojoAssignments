var app = angular.module('app', []);

app.factory('Factory', function(){
    var products = [];

    var factory = {};
    factory.index = function(callback){
        console.log("getting to factory!");
        callback(products);
    }
    factory.create = function(obj, callback){
        products.push(obj);
    }
    factory.delete = function(obj, callback){
        products.splice(products.indexOf(obj), 1)
    }
    return factory;
})

app.controller('Controller', function(Factory){
    var self = this;

    function setProducts(data){
        self.products = data;
    }

    Factory.index(setProducts);

    this.create = function(){
        Factory.create(this.newProduct)
        self.newProduct = {};
    }
    this.delete = function(obj){
        Factory.delete(obj)
    }
})
