
var mongoose = require('mongoose');
var Crow = mongoose.model('Crow');

module.exports = {

    index: function(req, res){
        Crow.find({}, function(err, crows){
            if (err) {
                res.render('index');
            } else {
                var context = {
                    crows: crows
                }
                res.render('index', context)
            }
        })
    },

    show: function(req, res){
        var id = req.params.id;
        Crow.find({_id:id}, function(err, crow){
            if (err) {
                res.redirect('/')
            } else {
                var context = {
                    crow:crow[0]
                }
                res.render('read', context)
            }
        })
    },

    edit: function(req, res){
        var id = req.params.id;
        Crow.find({_id:id}, function(err, crow){
            if (err) {
                console.log("ERROR ISOLATING CROW");
                res.redirect('/')
            } else {
                var context = {
                    crow:crow[0]
                }
                res.render('edit', context)
            }
        })
    },

    update: function(req, res){
        var id = req.params.id;
        Crow.findOne({_id:id}, function(err, crow){
            if (err) {
                console.log("ERROR FINDING CROW");
                res.redirect('/edit/'+id)
            } else {
                console.log("SUCCESS FINDING CROW!!");
                crow.name = req.body.name;
                crow.personality = req.body.personality;
                crow.age = req.body.age;
                crow.save(function(err){
                    if (err) {
                        console.log("ERROR SAVING CHANGES TO CROW");
                        res.redirect('/')
                    } else {
                        console.log("SUCCESS SAVING CHANGES TO CROW");
                        res.redirect('/')
                    }
                })
            }
        })
    },

    destroy: function(req, res){
        var id = req.params.id;
        Crow.remove({_id:id}, function(err){
            if (err) {
                console.log("ERROR DELETING CROW");
                res.redirect('/')
            } else {
                console.log("SUCCESSFULLY DELETED CROW");
                res.redirect('/')
            }
        })
    },

    create: function(req, res){
        if (req.body.submit == "Cancel") {
            res.redirect('/')
        } else {
            var new_crow = new Crow({
                name: req.body.name,
                age: req.body.age,
                personality: req.body.personality
            })
            new_crow.save(function(err){
                if (err) {
                    console.log("ERROR SAVING");
                    res.redirect('/');
                } else {
                    console.log("SUCCESSFULL SAVE");
                    res.redirect('/')
                }
            })
        }
    },
}
