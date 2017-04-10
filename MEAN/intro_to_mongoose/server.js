var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

var mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    var usersArray = [];
    User.find({}, function(err, users){
        if (err) {
            res.render('/')
        } else {
            usersArray = users;
            var context = {
                users: usersArray
            }
            res.render('index', context);
        }
    })


});

app.post('/users', function(req, res){
    console.log('POST DATA', req.body);
    var user = new User({name: req.body.name, age:req.body.age});
    user.save(function(err){
        // if there is an error, console log that something went wrong.
        if (err) {
        } else {
            res.redirect('/')
        }
    })
});

app.listen(8000);
