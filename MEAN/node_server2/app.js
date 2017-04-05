var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/dojos/new') {
        fs.readFile('dojosNew.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/style.css') {
        fs.readFile('style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('!404! File Not Found !404!')
    }
});

server.listen(8000);
