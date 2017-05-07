var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    app = express();

app.use(express.static(path.join(__dirname, './../client')))
app.use(express.static(path.join(__dirname, './../bower_components')))
app.use(bp.json())

require('./config/mongoose.js')
require('./config/routes.js')(app)

app.listen(8000)
