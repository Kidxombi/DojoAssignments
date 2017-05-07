var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: {type:String, required:true},
    image: {type:String, required:true},
    description: {type:String, required:true},
    quantity: {type:String, required:true},
}, {timestamps:true});

mongoose.model('Product', ProductSchema)
