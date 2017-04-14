var mongoose = require('mongoose');

var CrowSchema =  new mongoose.Schema({
    name: {type:String, required:true},
    age: {type:String, required:true},
    personality: {type:String, required:true}
}, {timestamps:true})

mongoose.model('Crow', CrowSchema);
