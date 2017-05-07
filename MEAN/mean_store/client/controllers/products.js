app.controller('productController', function(productFactory){

    var self = this;
    var index = function(){
        productFactory.index(function(data){
            self.products = data
        });
    }
    index();

    this.makeArr = function(number){
        var array = [];
        for (var i = 1; i < number+1; i++) {
            array.push(i);
        }
        return array;
    }

    this.create = function(){
        this.newProduct.quantity = this.n;
        productFactory.create(this.newProduct);
        index();
    }
    this.delete = function(id){
        productFactory.delete(id);
        index();
    }

})
