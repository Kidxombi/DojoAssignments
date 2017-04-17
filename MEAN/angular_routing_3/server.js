var express = require('express');
var mongoose = require('mongoose');
var bp = require('body-parser');
var path = require('path');

var root = __dirname;
var port = 8000;
var app = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json());

app.listen(port);
