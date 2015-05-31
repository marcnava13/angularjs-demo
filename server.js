// Inicialización
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 3000;

// Configuracion
var $host = 'localhost';
var $port = '27017';
var $databaseName = 'demo';
mongoose.connect('mongodb://' + $host + ':'+ $port + '/'+$databaseName);

app.configure(function() {
    app.use(express.static(__dirname + '/angular'));        
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// Cargamos los endpoints
require('./app/routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);