var socket  = io.connect();
var name = prompt("What is your name?");
var user_info = {};

socket.on('handshake', function(data){
    for (i in data.users) {
        $('.userBox').append("<p class='user'>"+data.users[i].name+"</p>");
    }
    for (i in data.messages) {
        $('.chatBox').append("<p class='message'>"+data.messages[i].user+" : "+data.messages[i].text+"</p>")
    }
})
socket.on('user_disconnected', function(data){
    alert(data.name+" has left the room");
    $('.userBox').empty()
    for (i in data.new_list) {
        $('.userBox').append("<p class='user'>"+data.new_list[i].name+"</p>");
    }
})
socket.emit('new_user', {name:name});
socket.on('current_user', function(data){
    user_info = data.user;
})
socket.on('user_joined', function(data){
    $('.userBox').append("<p class='user'>"+data.name+"</p>");
});



$('.sendButton').click(function(){
    socket.emit('send_pressed', {message:$('.textBox').val(), who:user_info.name})
})
socket.on('new_message', function(data){
    $('.chatBox').append("<p class='message'>"+data.message.user+" : "+data.message.text+"</p>")
})
