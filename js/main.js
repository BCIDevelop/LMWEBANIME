(function(){
	'use strict';
	document.addEventListener('DOMContentLoaded',function(){
		
		var map = L.map('mapa').setView([20.674829, -103.38746], 16);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([20.674829, -103.387468]).addTo(map)
			.bindPopup('LMWebCamp 2018 <br> Boletos ya disponibles')
			.openPopup();

		//Campos Datos Usuario
		var nombre = document.getElementById('nombre');
		var apellido = document.getElementById('apellido');
		var email = document.getElementById('email');
		
		//Campos pases
		var pase_dia = document.getElementById('producto1');
		var pase_dosdias = document.getElementById('producto2');
		var pase_completo = document.getElementById('producto3');
		
		//Botones y divs
		var calcular = document.getElementById('calcular');
		var errorDiv = document.getElementById('error');
		var botonRegistro = document.getElementById('btnRegistro');
		var lista_productos = document.getElementById('lista-productos');	
		var suma = document.getElementById('suma-total');
		
		if(document.getElementById('calcular')){
	
		calcular.addEventListener('click', calcularMontos);
		
		nombre.addEventListener('blur', validarCampos);
		apellido.addEventListener('blur', validarCampos);
		email.addEventListener('blur', validarCampos);
		
		email.addEventListener('blur', validarMail);
		
		function calcularMontos(event){
			event.preventDefault();
				var boletosDia = parseInt(pase_dia.value,10) || 0,
					boletos2Dias = parseInt(pase_dosdias.value,10) || 0,
					boletoCompleto = parseInt(pase_completo.value,10) || 0;
					
				var totalPagar = (boletosDia*30) + (boletos2Dias*45) + (boletoCompleto*50);
				
				var listadoProductos = [];
				
				if(boletosDia >=1){
					listadoProductos.push(boletosDia + ' Pases por día');
				}
				if(boletos2Dias >=1){
					listadoProductos.push(boletos2Dias + ' Pases por 2 días');
				}
				if(boletoCompleto >=1){
					listadoProductos.push(boletoCompleto + ' Pases completos');
				}
				
				lista_productos.style.display= 'block';
				lista_productos.innerHTML='';
				for(var i = 0;i < listadoProductos.length;i++){
					lista_productos.innerHTML += listadoProductos[i] + '<br/>'
				}
				suma.innerHTML = "$ " + totalPagar.toFixed(2);
		}
		
		function validarCampos(){
			if(this.value === ''){
				errorDiv.style.display = 'block';
				errorDiv.innerHTML = "este campo es obligatorio";
				this.style.border = '1px solid red';
				errorDiv.style.border = '1px solid red';
			}
			else {
				errorDiv.style.display = 'none';
				this.style.border = '1px solid #cccccc';
			}
		}
		
		function validarMail(){
			if(this.value.indexOf("@") > -1){
				errorDiv.style.display = 'none';
				this.style.border = '1px solid #cccccc';				
			}
			else {
				errorDiv.style.display = 'block';
				errorDiv.innerHTML = "debe tener al menos una @";
				this.style.border = '1px solid red';
				errorDiv.style.border = '1px solid red';
			}
		}
		}
		
	});	//DOM CONTENT LOADED
})();

$(function(){
	
	//Lettering
	$('.nombre-sitio').lettering();
	
	//Menu fijo
	var windowHeight = $(window).height();/*Altura de la ventana*/
	var barraAltura = $('.barra').innerHeight();
	
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();/*por defecto*/
		if(scroll > windowHeight){
			$('.barra').addClass('fixed');
			$('body').css({'margin-top': barraAltura + 'px'});
		}
		else{
			$('.barra').removeClass('fixed');
			$('body').css({'margin-top': '0px'});	
		}			
	});
	
	//Programa de Conferencias
	$('.programa-evento .info-curso:first').show()
	$('.menu-programa a:first').addClass('activo');
	
	$('.menu-programa a').on('click', function(){
		$('.menu-programa a').removeClass('activo');
		$(this).addClass('activo');
		var enlace= $(this).attr('href');
		$('.ocultar').fadeOut();
		$(enlace).fadeIn(1000);	//ms
		return false;
	});	
	
	//Animaciones para los numeros
	var resumenLista = $('.resumen-evento');
	if(resumenLista.length > 0){
		$('.resumen-evento').waypoint(function(){
			$('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1000);
			$('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1000);
			$('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1000);
			$('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1000);
		},{
			offset:'60%'
		});
	}
});