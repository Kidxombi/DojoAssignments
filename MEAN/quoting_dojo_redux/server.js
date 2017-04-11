var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quotes_db');

var QuoteSchema = new mongoose.Schema({
    poster: {type: String, required:true},
    content: {type: String, required:true}
}, {timestamps:true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.post('/create', function(req, res){
    if (req.body.submit == "Skip") {
        res.redirect('/quotes')
    } else {
        console.log('POST DATA', req.body);
        var new_quote = new Quote({poster:req.body.poster, content:req.body.content});
        new_quote.save(function(err){
            if (err) {
                console.log("ERROR SAVING");
                res.redirect('/')
            } else {
                console.log("SUCCESS SAVING!!!");
                res.redirect('/quotes');
            }
        })
    }
});

app.get('/quotes/:id/destroy', function(req, res){
    var id = req.params.id;
    console.log(id);
    Quote.remove({_id:id}, function(err){
        if (err) {
            console.log("ERROR REMOVING QUITE ID: "+id);
            res.redirect('/quotes');
        } else {
            res.redirect('/quotes');
        }
    });
})

app.get('/quotes', function(req, res){

    Quote.find({}, function(err, array){
        if (err) {
            console.log("ERROR FINDING QUOTES");
            res.redirect('/')
        } else {
            var context = {
                quotes: array
            }
            res.render('quotes', context)
        }
    })


})

app.listen(8000);
