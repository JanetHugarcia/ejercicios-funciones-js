// Escribe aquí tu codigo Javascript

var str = prompt("ingrese texto:");
var res= str.trim();


function trim(cadena) {
	return cadena.replace(/\s/g, "")
}

function InvertirCadena(cadena){
	var cadenaInvertida="";
	var x=cadena.length;
	var mensaje = "";

	while(x>=0){
		cadenaInvertida += cadena.charAt(x);
		x--;
	}
	if(cadena === cadenaInvertida){
		mensaje = "Es palindromo"
	}else{
		mensaje ="No es palindromo"
	}
	return mensaje;
}
alert(InvertirCadena(trim(res)));