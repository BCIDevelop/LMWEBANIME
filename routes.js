var express=require('express');
var moment = require('moment')
var router= express.Router();
var path = require('path');
var request = require('request');
var fecha = Date.now();
//Funciones
const date = moment()
console.log(date.toDate())

// Parse Hub API

request({
    uri: 'https://www.parsehub.com/api/v2/projects/t-kgTfguQZ9B/last_ready_run/data',
    method: 'GET',
    gzip: true,
    qs: {
      api_key: "tjuKTyzmYK5r",
      format: "json"
    }
  }, function(err, resp, body) {
 
    ObjectJSON=JSON.parse(body);

   console.log(body)
  
    Text1=ObjectJSON['selection1'][2]['selection3'];
    Image1=ObjectJSON['selection1'][2]['images'];
    Fecha=ObjectJSON['selection1'][2]['fecha'];
    console.log(Text1)
    console.log(Image1)
    console.log(Fecha)
  
   
    const date1 = moment(Fecha,"MMM. DD, YYYY hh:mm")
    console.log(date1.fromNow(true));

}); 

//Pagina Principal  

router.get('/', function(req,res){
  
   res.render('index',{
   
        ParseText1: Text1,
        ParseImage1: Image1
   });

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

