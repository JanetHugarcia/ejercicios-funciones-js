// Escribe aquí tu codigo Javascript
function paridad(n){
	var mensaje = "";
	if (n%2===0){
		mensaje = n + " es par";
	}else{
		mensaje =n + " es impar";
	}
	return mensaje;
}

var n = parseInt(prompt("PARIDAD\nIngrese numero:"));
alert(paridad(n));



