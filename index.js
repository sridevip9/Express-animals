var express = require('express');
var bodyParser = require('body-parser');

var animals = require('./animals');
//var birds = require('./birds');
var app = express();


app.use(bodyParser.json());
app.use('/', animals);

app.listen(3000, function() {
    console.log('server listening port 3000....')
});