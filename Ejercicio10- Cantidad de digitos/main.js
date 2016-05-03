// Escribe aquí tu codigo Javascript
function Digitos(n){
	var res;
	if(n>0){
		res="Cifras: "+n.toString().length;
	}else{
		res = "ingrese un numero entero positivo";
	}
	return res;
}
var a = parseInt(prompt("Ingrese un numero"));
alert(Digitos(a));
