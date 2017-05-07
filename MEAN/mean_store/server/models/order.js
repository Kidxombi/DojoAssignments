var mongoose = require('mongoose'),
    OrderSchema = mongoose.Schema({
        customer:Object,
        product: Object,
        quantity: String
    }, {timestamps:true});

mongoose.model('Order', OrderSchema);
