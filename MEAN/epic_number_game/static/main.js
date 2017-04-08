var socket = io.connect();
$('#epicButton').click(function(){
    socket.emit('epicButton_pressed', {x:1});
})
$('#resetButton').click(function(){
    socket.emit('resetButton_pressed')
})
socket.on('current_number', function(data){
    $('#count').text(data._count);
})
socket.on('server_response_add', function(data){
    $('#count').text(data.count);
})
socket.on('server_response_reset', function(data){
    $('#count').text(data.count)
})
