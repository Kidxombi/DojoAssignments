console.log("routes.js is loading!!!!");
var friends = require('./../controllers/friends.js')

module.exports = function(app){
    app.get('/friends', function(req, res){
        friends.index(req, res);
    });
    app.post('/friends', function(req, res){
        friends.create(req, res);
    });
    app.post('/friends/update', function(req, res){
        friends.update(req, res);
    });
    app.post('/friends/destroy', function(req, res){

        friends.destroy(req, res);
    });
}
