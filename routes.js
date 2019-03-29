var express=require('express');

var router= express.Router();
var path = require('path');
//Pagina Principal
router.get('/', function(req,res){
   res.sendFile(path.join(__dirname + '/index.html'));

});
router.get('/registro.html', function(req,res){
    res.sendFile(path.join(__dirname + '/registro.html'));
 
 });
 router.get('/eventos.html', function(req,res){
    res.sendFile(path.join(__dirname + '/eventos.html'));
 
 });


module.exports = router;