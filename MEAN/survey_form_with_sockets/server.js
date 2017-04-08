var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

var server = app.listen(8000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    // socket code here
    socket.on('button_pressed', function(data){
        socket.emit('server_response', {'server_response': data.clientObject});

    })


})
