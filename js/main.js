
function validarEmail(valor) {
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
	 return true;
	} else {
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
		$("#name").parent().append('<span>campo nombre obligatorio</span>');
		
	}

	var apellido = $("#lastname").val().trim();
		if (sonLetrasSolamente(apellido) == false || validarPrimeraLetra(apellido) == true){
		$("#lastname").parent().append('<span>campo apellido obligatorio</span>');
	
		
	}

	var mail = $("#input-email").val().trim();
		if (validarEmail(mail) == false){
		$("#input-email").parent().append('<span>campo mail obligatorio</span>');
		
		
	}
	

	var identif = $("#input-password").val().trim();
		if (identif == 123456 || identif == 098765 || identif == "password" || identif.length < 6 ){
	
		$("#input-password").parent().append('<span>campo password obligatorio</span>');
		
	
	}

	var elegir = $(".form-control").val().trim();
		if (elegir == "" ){
		$("select.form-control").parent().append('<span>debe seleccionar una opción</span>');
	
	}
	
	
}