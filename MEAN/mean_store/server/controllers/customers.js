var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer'),
    Order = mongoose.model('Order');

module.exports = {
    index:function(req, res){
        Customer.find({}, function(err, customers){
            if (err) {
                res.json({success:false, errors:["error getting all customers from db"]})
            } else {
                res.json({success:true, customers:customers})
            }
        })
    },

    create:function(req, res){
        var new_customer = new Customer(req.body.customer);
        new_customer.save(function(err){
            if (err) {
                res.json({success:false, errors:["error saving customer to db"]})
            } else {
                res.json({success:true, errors:["success saving customer to db"]})
            }
        })
    },

    delete:function(req, res){
        Customer.remove({_id:req.params.id}, function(err){
            if (err) {
                res.json({success:false, errors:["error deleting customer from db"]})
            } else {
                res.json({success:true, errors:["success deleting customer from db"]})
            }
        })
    },

    order:function(req, res){
        var order = new Order({
            customer:req.body.customer,
            product:req.body.product,
            quantity:req.body.quantity
        })
        console.log("the order i constructed is---------", order);
        Customer.findOne({_id:req.body.customer.id}, function(err, customer){
            if (err) {
                res.json({
                    success:false,
                    errors:["error finding friend who ordered"]

                });
            } else {
                console.log("customer", customer);
                customer.orders.push(order);
                customer.save(function(err){
                    if (err) {
                        res.json({
                            success:false,
                            errors:["error saving updated customer to db"]
                        })
                    } else {
                        res.json({
                            success:true,
                            messages:["success saving updated customer to db"]
                        })
                    }
                })
            }
        })
    },
    getOrders:function(req, res){
        Customer.find({}, function(err, c){
            if (err) {
                console.log(err);
            } else {
                for (var i = 0; i < c.length; i++) {
                    if (c[i].orders) {
                        console.log("there are orders in this one...here the are-----", c[i].orders);
                        var orders = [];
                        for (var j = 0; j < c[i].orders.length; j++) {
                            orders.push(c[i].orders[j])
                        }
                        console.log(orders);
                        res.json({
                            success:true,
                            orders:orders
                        })
                    }

                }
            }
        });
    }
}
