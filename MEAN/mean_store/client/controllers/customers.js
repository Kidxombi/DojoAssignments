app.controller('customerController', function(customerFactory, $location){
    var self = this;
    var index = function(){
        customerFactory.index(function(data){
            self.customers = data;
        });
    }
    index();

    this.create = function(){
        customerFactory.create(this.newCustomer);
        index();
    }
    this.delete = function(id){
        customerFactory.delete(id);
        index();
    }
})
