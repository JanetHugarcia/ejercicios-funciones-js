// Escribe aquí tu codigo Javascript
function NumeroPrimo(a){
	var mensaje;
	if(a==1 || a==2){
		mensaje = " Es un numero primo";
	}else{
		for(var i=2;i<a;i++){
			if(a%i == 0){
				mensaje =" no un numero primo";
				break;
			}else{
				mensaje = " Es un numero primo";
				break;
			}
		}
	}
	return mensaje;
}
var a=parseInt(prompt("NUMERO PRIMO\nIngrese numero a evaluar"));
alert(NumeroPrimo(a));


