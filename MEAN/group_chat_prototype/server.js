var express = require('express');
var path = require('path');
var app = express();
var users = [];

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    console.log(users);
    res.render('index');
})

var server = app.listen(8000)
var io = require('socket.io').listen(server);
io.sockets.on('connect', function(socket){
    socket.emit('handshake', {users:users})
    socket.on('new_user', function(data){
        var new_user = {name:data.name, id:socket.id}
        users.push(new_user);
        io.emit('user_joined', {user:new_user, message: new_user.name+" has joined the room!"})
    })
    socket.on('disconnect', function(){
        for(i in users){
            if(users[i].id == socket.id){
                var old_user_name = users[i].name
                users.splice(i, 1)
            }
        }

        socket.broadcast.emit('user_disconnected', {name:old_user_name, users:users})
        console.log('THE SOCKET ID THAT JUST DISCONNECTED IS:', socket.id);
    })
})
