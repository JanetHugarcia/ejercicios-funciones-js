// Escribe aquí tu codigo Javascript

function Reconocer(texto){
	var minuscula = texto.toLowerCase();
	var mayuscula = texto.toUpperCase();

	var mensaje = "La cadena ";
	
	if(texto === minuscula){
		mensaje += " está formada por minusculas";
	}else if(texto === mayuscula){
		mensaje += " está formada por mayuscula";
	}else{
		mensaje += " está formada por minusculas y mayusculas";
	}
	return mensaje;
}

var s = prompt("Ingrese texto:");

alert(Reconocer(s));



