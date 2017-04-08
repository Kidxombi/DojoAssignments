var express = require('express');
var path = require('path');

var app = express();
var count = 0;
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var x = {
        count:count
    }
    res.render('index', x);
});

var server = app.listen(8000);
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    // socket code here
    io.emit('current_number', {_count:count})

    socket.on('epicButton_pressed', function(data){
        count += data.x;
        io.emit('server_response_add', {count:count})
    })
    socket.on('resetButton_pressed', function(){
        count = 0;
        io.emit('server_response_reset', {count:count})
    })


});
