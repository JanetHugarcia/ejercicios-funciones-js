// Escribe aquí tu codigo Javascript
do{
	var n = parseInt(prompt("Indique numero:\n1. Sumar\n2.Restar\n3.Multiplicar\n4.División\n5.Salir"));

	if(n!=5){
		var n1 = parseInt(prompt("Ingrese primer numero:"));
		var n2 = parseInt(prompt("Ingrese segundo numero:"));
		var op = null;

		switch (n){
			case 1:
				op = n1+n2;
				document.write( n1 + " + " + n2 + " = " + op + "<br>");
				break;
			case 2: 
				op = n1 - n2;
				document.write( n1 + " - " + n2 + " = " + op+ "<br>"));
				break;
			case 3:
				op = n1*n2;
				document.write( n1 + " x " + n2 + " = " + op+ "<br>"));
				break;
			case 4 :
				op = n1/n2;
				document.write( n1 + " / " + n2 + " = " + op+ "<br>"));
				break;
			default:
				break;
		}
	}	
}while(n!=5)

