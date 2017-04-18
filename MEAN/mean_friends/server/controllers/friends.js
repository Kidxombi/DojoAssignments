
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend')


module.exports = {
    index: function(req, res){

        Friend.find({}, function(err, friends){
            if (err) {
                res.json({friends:"error, could not get friends"});
            } else {

                res.json({friends:friends});
            }
        })
    },

    create: function(req, res){
        var new_friend = new Friend({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday
        })
        new_friend.save(function(err){
            if (err) {
                res.json({message:"error saving to db"})
            } else {
                res.json({message:"success saving to db"})
            }
        })

    },

    update: function(req, res){
        res.json({placeholder:'update'});
    },

    delete: function(req, res){
        res.json({placeholder:'delete'});
    },

    show: function(req, res){
        res.json({placeholder:'show'});
    },
}
