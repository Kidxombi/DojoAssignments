var customers = require('./../controllers/customers.js'),
    products = require('./../controllers/products.js');


module.exports = function(app){

    // Customer Routes
    app.get('/customers', function(req, res){
        customers.index(req, res);
    })

    app.post('/customers', function(req, res){
        customers.create(req, res);
    })

    app.delete('/customers/:id', function(req, res){
        customers.delete(req, res);
    })
    app.post('/customers/order', function(req, res){
        customers.order(req, res);
    })
    app.get('/customers/order', function(req, res){
        customers.getOrders(req, res);
    })

    // Product Routes
    app.get('/products', function(req, res){
        products.index(req, res);
    })

    app.post('/products', function(req, res){
        products.create(req, res);
    })

    app.delete('/products/:id', function(req, res){
        products.delete(req, res);
    })
}
