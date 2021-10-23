function somar(obj1, obj2, objRes){
	var a = parseFloat(obj1.value);
	var b = parseFloat(obj2.value);
	var r = a+b;	
	objRes.value = r;
}

function subtrair(obj1, obj2, objRes){
	var a = parseFloat(obj1.value);
	var b = parseFloat(obj2.value);
	var r = a-b;	
	objRes.value = r;
}

function multiplicar(obj1, obj2, objRes){
	var a = parseFloat(obj1.value);
	var b = parseFloat(obj2.value);
	var r = a*b;	
	objRes.value = r;
}

function dividir(obj1, obj2, objRes){
	var a = parseFloat(obj1.value);
	var b = parseFloat(obj2.value);
	if(b==0){
		objRes.value = "divisão por zero !";
	} else {
		var r = a/b;	
		objRes.value = r;
	}
}