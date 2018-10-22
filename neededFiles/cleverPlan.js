var movis = document.getElementById('movis');
var dig = document.getElementById('dig');
var resul = document.getElementById('resultado');
var back = document.getElementById('back');
var turn = 1;
var tasa = {digitel: 0.1, movistar:0.1}; //REPRESENTA LAS TASAS DE BSF/MB.
var first = true;
var input = document.getElementById('valor');

//SI SE ACABA DE ABRIR LA PAGINA NO SE ANIMA EL FONDO 
if(first == true){
	back.classList.remove('red');
}
//EJECUTAR RESPUESTA CON LA TECLA ENTER
input.addEventListener("keyup", function(event){
	if (event.keyCode == 13){
		mostrar();
	}
});
//CAMBIAR EL FONDO CON RESPECTO A LA OPERADORA
function check(){
	if (turn == 1){
		movis.checked = false;
		dig.checked = true;
		back.classList.remove('red');
		back.classList.add('blue');
		turn = 2;
	}else{
		dig.checked = false;
		movis.checked = true;
		back.classList.remove('blue');
		back.classList.add('red');
		turn = 1;
	}
}
//PROCESAR EL RESULTADO
function mostrar(){
	var textbox = document.getElementById('valor');
	var valor = document.getElementById('valor').value;
	valor = valor.replace(/,/g,''); //Eliminar las ','
	if(turn == 1){
		var resultado = valor / tasa.movistar;
	}else{
		var resultado = valor / tasa.digitel;
	}
//DELIMITAR EL RESULTADO
	if (resultado < 0){
		resul.innerHTML = 'Ingrese un monto valido, valores negativos no estan permitidos.';	
	}else if(resultado < 999){
		resul.innerHTML = 'Ese monto equivale a ' + resultado.toFixed(2) + 'MB de navegación.';	
	}else{
		resul.innerHTML = 'Ese monto equivale a ' + (resultado/1024).toFixed(2) + 'GB de navegación.';
	}	
	textbox.value = '';
}


// FORMATEAR EL VALOR INGRESADO
var cleave = new Cleave('#valor', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

/*
// ELIMINAR LAS ',' EN EL FORMATO
function erase(format){
	var numbers = [];
	for ( var i = 0; i < format.length; i++){
		numbers[i] = format.charAt(i);
		if(numbers[i] == ','){
			numbers.splice(i,1);
		}
	}
	format = numbers.join('');
	return format;
}
*/
