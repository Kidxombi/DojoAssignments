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

require('/server/config/routes.js')(app)

app.listen(8000);
