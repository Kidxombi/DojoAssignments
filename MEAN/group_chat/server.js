var express = require('express');
var path = require('path');
var app = express();
var users = [];
var messages = [];

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

var server = app.listen(8000);
var io = require('socket.io').listen(server);

io.sockets.on('connect', function(socket){
    socket.emit('handshake', {users:users, messages:messages})
    socket.on('new_user', function(data){
        var new_user = {name:data.name, id:socket.id};
        users.push(new_user);
        socket.emit('current_user', {user:new_user})
        io.emit('user_joined', {name:new_user.name});
    })


    socket.on('send_pressed', function(data){
        var u = data.who
        var new_message = {text:data.message, user:data.who}
        messages.push(new_message)
        io.emit('new_message', {message:new_message})
    })


    socket.on('disconnect', function(){
        for (i in users) {
            if (users[i].id == socket.id) {
                var who_left = users[i].name;
                users.splice(i, 1);
            }
        }
        socket.broadcast.emit('user_disconnected', {name:who_left, new_list:users})
    })



})
