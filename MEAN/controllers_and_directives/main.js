var app = angular.module('app', []);
app.controller('theController', function(){

    this.foods = [];

    this.addFood = function(){
        this.foods.push(this.newFood.toLowerCase())
        this.newFood = ""
    }
    this.clear = function(){
        this.foods = [];
    }


})
