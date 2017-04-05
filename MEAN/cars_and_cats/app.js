var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }

    if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }

    if (request.url === '/cars/new') {
        fs.readFile('views/carsNew.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        });
    }
    // image routes =================================
    else if (request.url === '/images/car1.jpg') {
        fs.readFile('images/car1.jpg', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

});

server.listen(7077);
