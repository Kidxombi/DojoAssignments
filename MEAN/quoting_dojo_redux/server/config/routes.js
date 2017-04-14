var quotes = require('../controllers/quotes.js');
module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    })

    app.post('/create', quotes.create(res, res));

    app.get('/quotes/:id/destroy', function(req, res){
        var id = req.params.id;
        console.log(id);
        Quote.remove({_id:id}, function(err){
            if (err) {
                console.log("ERROR REMOVING QUITE ID: "+id);
                res.redirect('/quotes');
            } else {
                res.redirect('/quotes');
            }
        });
    })

    app.get('/quotes', quotes.show(req, res));

}
