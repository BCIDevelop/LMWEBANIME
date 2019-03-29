
var router = require('./routes.js');
var express = require('express');
var app= express();
app.use('/', router);

app.use('/css',express.static(__dirname +'/css'));
app.use('/images',express.static(__dirname +'/images'));
app.use('/img',express.static(__dirname +'/img'));
app.use('/fonts',express.static(__dirname +'/fonts'));
app.use('/doc',express.static(__dirname +'/doc'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/video',express.static(__dirname +'/video'));
app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });