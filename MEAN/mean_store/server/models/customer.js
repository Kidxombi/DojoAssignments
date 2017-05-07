var mongoose = require('mongoose')
var CustomerSchema = mongoose.Schema({
    name:{type:String, required:true},
    orders:{type:Array}
}, {timestamps:true})
mongoose.model('Customer', CustomerSchema)
