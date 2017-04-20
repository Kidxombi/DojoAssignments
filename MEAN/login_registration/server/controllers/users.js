console.log('users controller');
var mongoose = require('mongoose');
var user = mongoose.model('user')
module.exports = {

  index: function(req,res){
    user.find({}, function(err, users){
        if (err) {
            res.json({success:false, errors: ["error finding all users"]})
        } else {
            res.json({success:true, users:users})
        }
    })
  },
  create: function(req,res){
    var new_user = new user({
        fname:req.body.fname,
        lname:req.body.lname,
        bday:req.body.bday,
    });
    new_user.save(function(err){
        if (err) {
            res.json({success:false, errors:["error saving user to database"]});
        } else {
            res.json({success:true, messages:["success saving user to database"]});
        }
    })
  },

  update: function(req,res){
      console.log(req.body.user);
      var id = req.body.user._id;
        fname = req.body.user.fname,
        lname = req.body.user.lname,
        bday = req.body.user.bday;
      user.findOne({_id:id}, function(err, user){
          if (err) {console.log(err)}
          console.log(user);
          user.fname = fname;
          user.lname = lname;
          user.bday = bday;
          user.save(function(err){
              if (err) {
                  res.json({success:false, errors:["error saving updated user"]})
              } else {
                  res.json({success:true, messages:["success saving updated user"]})
              }
          })
      })
  },

  destroy: function(req,res){
    console.log("got to delete controller, req body is...", req.body);
    var id = req.body.user_id;
    console.log("id is", id);
    user.remove({_id:id}, function(err){
        if (err) {
            res.json({success:false, errors:["error deleting user from database"]})
        } else {
            res.json({success:true, messages:["success deleting freind from database"]})
        }
    });
  },
}
