$("#miformulario").submit(function(evento){
	evento.preventDefault();
	//console.info("Activando formulario......");
	var cadena=$(this).serializeArray();
	//console.info(cadena);
	$.ajax({
		url:"http://especialistasenlaweb.com/jmrdatos.php",
		type:"post",
		data:cadena
	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});
});