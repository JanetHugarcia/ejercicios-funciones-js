// Escribe aquí tu codigo Javascript
function order(a,b,c){
	var mensaje = "";
	if(a>b ){
		if(b>c){
			mensaje = c + " " + b + " " + a;
		}else {
			if(a>c){
				mensaje = b + " " + c + " " + a;
			}else{
				mensaje = b + " " + a + " " + c;
			}
		}
	}else {
		if(b<c){
			mensaje = a + " " + b + " " + c;
		}else {
			if(a>c){
				mensaje = c + " " + a +" " + b;
			}else{
				mensaje = a + " " + c + " " + b;
			}
		}
	}

	return mensaje;
}

var a = parseInt(prompt("Ingrese primer numero: "));
var b = parseInt(prompt("Ingrese segundo numero: "));
var c = parseInt(prompt("Ingrese tercer numero: "));

alert("Orden ascendente: " + order(a,b,c));






