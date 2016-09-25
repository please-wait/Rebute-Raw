/**
 * Created by robert on 2016-09-24.
 */
var express = require('express');
var bodyParser = require( 'body-parser' );
var cookieParser = require('cookie-parser');
var session = require('express-session');
var engines = require('consolidate');


var app = express();

var port = process.env.PORT || 1337;

// Whenever we access domain/assets then we will go find and make available the public folder
app.use(express.static(__dirname + '/public'));

// Sending a static file when a request happens
// app.get('/', function(req, res) {
//
//     // calling the index.ejs file based on line 13 in the code
//     // line 13 is where we set the template engine ejs as our view engine
//     res.render('dashboard.html');
// });

app.use(express.static('public'));
app.use(express.static('public'));
app.use(bodyParser.json()); // look for json passed in
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Navigation setup

app.get('/', function(req, res) {
    res.render('login', {
        title: 'Hello from render',
    });
});

app.get('/dashboard', function(req, res) {
    res.render('dashboard', {
        title: 'Hello from render',
    });
});

app.get('/reports', function(req, res) {
    res.render('reports');
});

app.get('/snips', function(req, res) {
    res.render('snips');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
