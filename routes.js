var express=require('express');

var router= express.Router();
var path = require('path');
//Pagina Principal
router.get('/', function(req,res){
   res.render('index');

});
//Pagina Registro
router.get('/registro.html', function(req,res){ 
    res.render('registro');
 
 });
 //Pagina Eventos
 router.get('/eventos.html', function(req,res){
    res.render('eventos');
 
 });


module.exports = router;