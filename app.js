/**
 * Created by Hans on 11-10-2016.
 */
var express = require('express');
var fs = require('fs');
var index = require('./data/index.js');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {

    res.render('index', index);

});

app.get('/about', function(req, res) {

    fs.readFile('./data/about.json', 'utf8', function(err, data) {
        res.render('index', JSON.parse(data));
    });

});

app.get('*', function(req, res) {
    res.redirect('/');
});

app.listen(3000);