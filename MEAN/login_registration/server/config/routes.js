console.log("routes.js is loading!!!!");
var users = require('./../controllers/users.js')

module.exports = function(app){
    app.get('/users', function(req, res){
        users.index(req, res);
    });
    app.post('/users', function(req, res){
        users.create(req, res);
    });
    app.post('/users/update', function(req, res){
        users.update(req, res);
    });
    app.post('/users/destroy', function(req, res){

        users.destroy(req, res);
    });
}
