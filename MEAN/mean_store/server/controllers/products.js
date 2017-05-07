var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

module.exports = {

    index:function(req, res){
        Product.find({}, function(err, products){
            if (err) {
                res.json({success:false, errors:["error getting all products from db"]})
            } else {
                res.json({success:true, products:products})
            }
        })
    },


    create:function(req, res){
        console.log(req.body);
        var new_product = new Product(req.body.product);
        new_product.save(function(err){
            if (err) {
                res.json({success:false, errors:["error saving product to db"]})
            } else {
                res.json({success:true, errors:["success saving product to db"]})
            }
        })
    },


    delete:function(req, res){
        Product.remove({_id:req.params.id}, function(err){
            if (err) {
                res.json({success:false, errors:["error deleting product from db"]})
            } else {
                res.json({success:true, errors:["success deleting product from db"]})
            }
        })
    }


}
