function somar(){
	var a = parseFloat(n1.value);
	var b = parseFloat(n2.value);
	var r = a+b;	
	resultado.value = r;
}

function subtrair(){
	var a = parseFloat(n1.value);
	var b = parseFloat(n2.value);
	var r = a-b;	
	resultado.value = r;
}

function multiplicar(){
	var a = parseFloat(n1.value);
	var b = parseFloat(n2.value);
	var r = a*b;	
	resultado.value = r;
}

function dividir(){
	var a = parseFloat(n1.value);
	var b = parseFloat(n2.value);
	if(b==0){
		resultado.value = "divisão por zero !";
	} else {
		var r = a/b;	
		resultado.value = r;
	}
}