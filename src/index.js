const inputContrasena = document.getElementById('input-contrasena');
const mensajeAlerta =document.getElementById('mensaje-alerta');
const contAcceso= document.getElementById('cont-acceso');
const secInicio= document.getElementById('sec-inicio');
const secDiario=document.getElementById('sec-diario');

const areaText=document.getElementById('area-text');
const offset=document.getElementById('offset');
const clear=document.getElementById('clear');
const btnCifra=document.getElementById('btn-cifrar');
const btnDescifra=document.getElementById('btn-descifrar');
const btnCopiar=document.getElementById('btn-copiar');
const btnRegresar=document.getElementById('btn-regresar');
const secBotonesCipher=document.getElementById('sec-botones-cipher');
const secBotonesMostrar=document.getElementById('sec-botones-mostrar');

let cadenaMostrar='';
let intentos = 3;

contAcceso.addEventListener('click', () => {
	contAcceso.classList.add('click');
	inputContrasena.focus();
});

// Login
inputContrasena.addEventListener('keyup', (event) =>{
	if (event.keyCode===13) {
		validar(inputContrasena.value);
	}
});

const validar= (password) => {
	if (password==='LABORATORIA') {
		secDiario.classList.add('block');
		secInicio.classList.add('none');


	} else {
		intentos--;
				if (intentos>0) {
					mensajeAlerta.innerHTML=`Clave incorrecta, te quedan ${intentos} intento(s).`;
		inputContrasena.value='';
	} else {
		contAcceso.innerHTML=`<img src="img/icon-bloq.png">`;
		mensajeAlerta.innerHTML=`Ya utilizaste todos tus intentos, en este momento no podrás ingresar`;
		secInicio.classList.add("contBloquedo");
	}
 }
}
const borrar = () => {
	areaText.value = '';
	offset.value=''
}
const mostrar= () => {
	secBotonesCipher.classList.add('none');
	secBotonesMostrar.classList.add('flex');
	areaText.value = cadenaMostrar;
  areaText.setAttribute('readonly', '');
}
const regresar=  () =>{
	cadenaMostrar='';
	areaText.value = '';
	offset.value='';
	secBotonesCipher.classList.remove("none");
	secBotonesMostrar.classList.remove("flex");
  areaText.removeAttribute('readonly');
}
const copiar=  () =>{
	areaText.focus();
	document.execCommand('selectAll');
	document.execCommand('copy');
	areaText.blur();
}
// 
// Acciones de Botones
clear.addEventListener('click',borrar);
btnCifra.addEventListener('click', () => { 
	cadenaMostrar = cipher.encode(offset.value, areaText.value);
	mostrar();
});
btnDescifra.addEventListener('click', () => {
	cadenaMostrar =  cipher.decode(offset.value, areaText.value);
	mostrar();
	});
btnCopiar.addEventListener('click',copiar);
btnRegresar.addEventListener('click', regresar);