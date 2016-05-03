// Escribe aquí tu codigo Javascript
function menor(a,b,c){
	var mensaje = "";
	if(a<b){
		if(a<c){
			mensaje = a+ " es menor";
		}else{
			mensaje = c + " es menor";
		}
	}else if(b<a){
		if(b<c){
			mensaje = b+ " es menor";
		}else{
			mensaje =  c + " es menor";
		}
	}else {
		mensaje = "Ingrese numero distinto";
	}

	return mensaje;
}
var a = parseInt(prompt("Ingrese primer numero"));
var b = parseInt(prompt("Ingrese segundo numero"));
var c = parseInt(prompt("Ingrese tercer numero"));

alert(menor(a,b,c));

