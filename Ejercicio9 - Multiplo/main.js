// Escribe aquí tu codigo Javascript
function multiplos(a){
	var cadena = "";
	for(var i=1; i<=10;i++){
		cadena +=  i*a + " ";
	}
	return cadena;
}
var a = parseInt(prompt("10 PRIMEROS NUMEROS\nIngrese numero:"));
alert(multiplos(a));


