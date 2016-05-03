// Escribe aquí tu codigo Javascript

function Cuadrado(a,b){
	var resultado;
	resultado = Math.pow(a,2) + 2*a*b + Math.pow(b,2);

	return resultado;
}

var a = parseInt(prompt("Ingrese primer numero"));
var b = parseInt(prompt("Ingrese segundo numero"));


alert("El producto de la suma es: " + Cuadrado(a,b));




