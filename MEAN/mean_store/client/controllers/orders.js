app.controller('orderController', function(customerFactory, productFactory){
    var self = this;
    var index = function(){
        customerFactory.index(function(data){
            self.customers = data
        });
        productFactory.index(function(data){
            self.products = data
        });


    }
    index();
    customerFactory.getOrders(function(data){
        console.log(data);
        self.orders = data;
    });
    console.log(this.orders, this.products, this.customers);


    this.create = function(){


        var newOrder = {
            product:{name:this.p.name, id:this.p._id},
            customer:{name:this.c.name, id:this.c._id},
            quantity:this.n
        }

        customerFactory.order(newOrder);
        index();
    }


    this.makeArr = function(number){
        var array = [];
        for (var i = 1; i < Number(number)+1; i++) {
            array.push(i);
        }
        return array;
    }

})
