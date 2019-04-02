var request = require('request');
var router = require('./routes.js');
var express = require('express');
var app= express();
// Rutas de nuestros html
app.use('/', router);
//Rutas de archivo estaticos usados por nuestros html
app.use('/css',express.static(__dirname +'/css'));
app.use('/images',express.static(__dirname +'/images'));
app.use('/img',express.static(__dirname +'/img'));
app.use('/fonts',express.static(__dirname +'/fonts'));
app.use('/doc',express.static(__dirname +'/doc'));
app.use('/js',express.static(__dirname +'/js'));
app.use('/video',express.static(__dirname +'/video'));

//Parse Hub data
request({
  uri: 'https://www.parsehub.com/api/v2/projects/t-kgTfguQZ9B/last_ready_run/data',
  method: 'GET',
  gzip: true,
  qs: {
    api_key: "tjuKTyzmYK5r",
    format: "json"
  }
}, function(err, resp, body) {
  console.log(body);
}); 

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });