var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var postData = {};

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})

app.post('/results', function(req, res){
    postData = req.body;
    res.render('results', {'user':postData})
})

app.listen(8000)
