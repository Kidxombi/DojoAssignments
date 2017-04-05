// get the http module
var http = require('http');

// fs module allows us to read and write content for responses
var fs = require('fs');

// create a server with the http module
var server = http.createServer(function(request, response){
    // see what url the clients are requesting
    console.log('client request URL:', request.url);
    // this is how we do routing
    if(request.url === '/'){
        fs.readFile('index.html','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about responses
            response.write(contents); // send response body
            response.end(); // finished
        });
    }
    else if(request.url === '/style.css'){
        fs.readFile('style.css','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'}); // send data about responses
            response.write(contents); // send response body
            response.end(); // finished
        });
    }
    // request did not match anything
    else {
        response.writeHead(404);
        response.end('File not found!');
    }
});
// tell your server which port to run on
server.listen(8000);
// print to terminal
console.log('Running in localhost at port 8000');
