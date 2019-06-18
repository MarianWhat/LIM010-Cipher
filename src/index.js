const inputContrasena = document.getElementById('input-contrasena');
const mensajeAlerta =document.getElementById('mensaje-alerta');
const mensajes=document.getElementById('mensajes');
const contAcceso= document.getElementById('cont-acceso');
const secInicio= document.getElementById('sec-inicio');
const secDiario=document.getElementById('sec-diario');

const areaText=document.getElementById('area-text');
const offset=document.getElementById('offset');
const clear=document.getElementById('clear');
const btnCifra=document.getElementById('btn-cifrar');
const btnDescifra=document.getElementById('btn-descifrar');
const btnCopiar=document.getElementById('btn-copiar');

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
		do {
			intentos--;
			mensajeAlerta.innerHTML=`Clave incorrecta, te quedan ${intentos} intento(s).`;
			inputContrasena.value='';
			break;
		}while(intentos > 0);
	}
	if (intentos===0){
		contAcceso.innerHTML=`<img src="img/icon-bloq.png">`;
		mensajeAlerta.innerHTML=`Ya utilizaste todos tus intentos, en este momento no podrás ingresar`;
		secInicio.classList.add("contBloquedo");
		}
}
const borrar = () => {
	areaText.value = '';
	offset.value=''
}
const mostrar= () => {
	areaText.value = cadenaMostrar;
}
const copiar=  () =>{
	areaText.focus();
	document.execCommand('selectAll');
	document.execCommand('copy');
	areaText.blur();
	mensajes.classList.add("block");
	setTimeout(() => {
	mensajes.classList.remove("block")}, 1300);
}

// Acciones de Botones
clear.addEventListener('click',borrar);
btnCifra.addEventListener('click', () => { 
	cadenaMostrar = cipher.encode(offset.value, areaText.value);
	mostrar();
});
btnDescifra.addEventListener('click', () => {
	cadenaMostrar = cipher.decode(offset.value, areaText.value);
	mostrar();
});
btnCopiar.addEventListener('click',copiar);