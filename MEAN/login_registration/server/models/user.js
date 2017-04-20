console.log("user model is loading");

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fname: {type:String, required:true, validate:{validator:function(arg){
        return /\w{2, 32}/.test(arg);
    }, message:"first name failed validation"}},

    lname: {type:String, required:true, validate:{validator:function(arg){
        return /\w{2, 32}/.test(arg);
    }, message:"last name failed validation"}},

    bday: {type:Date, required:true},

    email: {type:String, required:true, validate:{validator:function(arg){
        return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(arg);
    }, message:"email failed validation"}},

    password: {type:String, required:true, validate:{validator:function(arg){
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(arg);
    }, message:"Password failed validation, you must have at least 1 number, uppercase and special character"}},

}, {timestamps:true});

mongoose.model('user', userSchema);
