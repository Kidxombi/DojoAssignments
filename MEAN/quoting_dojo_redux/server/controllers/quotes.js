var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
    show: function(req, res){

        Quote.find({}, function(err, array){
            if (err) {
                console.log("ERROR FINDING QUOTES");
                res.redirect('/')
            } else {
                var context = {
                    quotes: array
                }
                res.render('quotes', context)
            }
        })
    }
    create: function(req, res){
        if (req.body.submit == "Skip") {
            res.redirect('/quotes')
        } else {
            console.log('POST DATA', req.body);
            var new_quote = new Quote({poster:req.body.poster, content:req.body.content});
            new_quote.save(function(err){
                if (err) {
                    console.log("ERROR SAVING");
                    res.redirect('/')
                } else {
                    console.log("SUCCESS SAVING!!!");
                    res.redirect('/quotes');
                }
            })
        }
    }
}
