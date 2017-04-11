var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dashboard_db');

var CrowSchema =  new mongoose.Schema({
    name: {type:String, required:true},
    age: {type:String, required:true},
    personality: {type:String, required:true}
}, {timestamps:true})
mongoose.model('Crow', CrowSchema);
var Crow = mongoose.model('Crow');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// ROUTES -------------------------------------------
app.get('/', function(req, res){
    Crow.find({}, function(err, crows){
        if (err) {
            console.log("There was an error isolating the list of crows");
            res.render('index');
        } else {
            console.log("success isolating the list of crows");
            var context = {
                crows: crows
            }
            res.render('index', context)
        }
    })
})

app.get('/read/:id', function(req, res){
    var id = req.params.id;
    console.log("ID: ", id);
    Crow.find({_id:id}, function(err, crow){
        if (err) {
            console.log("ERROR ISOLATING CROW");
            res.redirect('/')
        } else {
            var context = {
                crow:crow[0]
            }
            console.log(context.crow);
            res.render('read', context)
        }
    })
})

app.get('/edit/:id', function(req, res){
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
})

app.post('/edit/:id', function(req, res){
    var id = req.params.id;
    Crow.findOne({_id:id}, function(err, crow){
        if (err) {
            console.log("ERROR FINDING CROW");
            res.redirect('/')
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
})

app.post('/destroy/:id', function(req, res){
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

})


app.get('/create', function(req, res){
    res.render('create');
})

app.post('/create', function(req, res){
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
})
// ROUTES -------------------------------------------

app.listen(8000);
