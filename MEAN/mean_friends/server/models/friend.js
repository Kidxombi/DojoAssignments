console.log("friend model is loading!!!");

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    birthday: {type: Date}
}, {timestamps:true})

mongoose.model('Friend', FriendSchema);
