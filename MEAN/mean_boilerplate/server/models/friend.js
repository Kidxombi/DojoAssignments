console.log("friend model is loading");

var mongoose = require('mongoose');

var FriendSchema = mongoose.Schema({
    fname: String,
    lname: String,
    bday: Date,

}, {timestamps:true});

mongoose.model('Friend', FriendSchema);
