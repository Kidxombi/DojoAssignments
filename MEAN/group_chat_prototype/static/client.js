var socket = io.connect();
var name = prompt("What is your name?");
socket.on('handshake', function(data){
    for (i in data.users) {
        $('#the_users').append("<div value="+data.users[i].id+">"+data.users[i].name+"</div>")
    }
})
socket.on('user_disconnected', function(data){
    alert(data.name+" has disconnected");
    $('#the_users').empty()
    for (i in data.users) {
        $('#the_users').append("<div value="+data.users[i].id+">"+data.users[i].name+"</div>")
    }
})

socket.emit('new_user', {name:name})
socket.on('user_joined', function(data){
    console.log(data.message);
    console.log(data);
    $('#the_users').append("<div value="+data.user.id+">"+data.user.name+"</div>")
})
