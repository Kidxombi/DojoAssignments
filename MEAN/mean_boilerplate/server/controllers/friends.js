console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend')
module.exports = {

  index: function(req,res){
    Friend.find({}, function(err, friends){
        if (err) {
            res.json({success:false, errors: ["error finding all friends"]})
        } else {
            res.json({success:true, friends:friends})
        }
    })
  },
  create: function(req,res){
    var new_friend = new Friend({
        fname:req.body.fname,
        lname:req.body.lname,
        bday:req.body.bday,
    });
    new_friend.save(function(err){
        if (err) {
            res.json({success:false, errors:["error saving friend to database"]});
        } else {
            res.json({success:true, messages:["success saving friend to database"]});
        }
    })
  },

  update: function(req,res){
      console.log(req.body.friend);
      var id = req.body.friend._id;
        fname = req.body.friend.fname,
        lname = req.body.friend.lname,
        bday = req.body.friend.bday;
      Friend.findOne({_id:id}, function(err, friend){
          if (err) {console.log(err)}
          console.log(friend);
          friend.fname = fname;
          friend.lname = lname;
          friend.bday = bday;
          friend.save(function(err){
              if (err) {
                  res.json({success:false, errors:["error saving updated friend"]})
              } else {
                  res.json({success:true, messages:["success saving updated friend"]})
              }
          })
      })
  },

  destroy: function(req,res){
    console.log("got to delete controller, req body is...", req.body);
    var id = req.body.friend_id;
    console.log("id is", id);
    Friend.remove({_id:id}, function(err){
        if (err) {
            res.json({success:false, errors:["error deleting friend from database"]})
        } else {
            res.json({success:true, messages:["success deleting freind from database"]})
        }
    });
  },
}
