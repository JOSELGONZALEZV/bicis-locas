
function validarEmail(valor) {
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
	return true;}
		else {
	 	return false;
	}
}


function sonLetrasSolamente(valori){
	if(/^[a-zA-Z ]+$/.test(valori)){
	return true;}
		else {
		return false;
	}
}

function validarPrimeraLetra(valorx){
 
	if(valorx [0].toUpperCase()!= valorx[0]){
	return true;}
		else {
		return false;
	}

}
	
function validateForm(){
	
	/* Escribe tú código aquí */
	var nombre = $("#name").val().trim();
		if ( sonLetrasSolamente(nombre) == false || validarPrimeraLetra(nombre) == true){		
		$("#name").parent().append('<span>ingresar primera letra mayuscula y sin numeros o signos</span>');}

	var apellido = $("#lastname").val().trim();
		if (sonLetrasSolamente(apellido) == false || validarPrimeraLetra(apellido) == true){
		$("#lastname").parent().append('<span>ingresar primera letra mayuscula sin numeros o signos</span>');}

	var mail = $("#input-email").val().trim();
		if (validarEmail(mail) == false){
		$("#input-email").parent().append('<span>campo mail obligatorio ingresar formato @ mail</span>');}
	

	var identif = $("#input-password").val().trim();
		if (identif == 123456 || identif == 098765 || identif == "password" || identif.length <= 6 ){
		$("#input-password").parent().append('<span>password obligatorio con minimo 6 caracteres</span>');}

	var elegir = $("select.form-control").val().trim();
		if (elegir == "0" ){
		$("select.form-control").parent().append('<span>debe seleccionar una opción</span>');}
	var contacto = $("#input-social").val();
	 	if (contacto != ""){
		$(".input-group").addClass("input-box");
	  	$("#input-social").parent().append('<span> recuerda seguirnos en twitter</span>');}
	
		$(".checkbox ").children().children().addClass("registro");
		if ($("input.registro").is(":checked")){
		alert("Gracias te enviaremos informacion a tu correo");
		}
	
	}

		
		











	
	
