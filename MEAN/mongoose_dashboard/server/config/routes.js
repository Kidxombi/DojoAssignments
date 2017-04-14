var crows = require('./../controllers/crows.js');

module.exports = function(app){

    app.get('/', function(req, res){
        crows.index(req, res);
    })

    app.get('/read/:id', function(req, res){
        crows.show(req, res);
    })

    app.get('/edit/:id', function(req, res){
        crows.edit(req, res);
    })

    app.post('/edit/:id', function(req, res){
        crows.update(req, res);
    })

    app.post('/destroy/:id', function(req, res){
        crows.destroy(req, res);
    })

    app.get('/create', function(req, res){
        res.render('create')
    })

    app.post('/create', function(req, res){
        crows.create(req, res);
    })
}
