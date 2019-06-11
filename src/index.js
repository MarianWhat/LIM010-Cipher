const passVar = document.getElementById('pass');
const msAlertaVar =document.getElementById('msAlerta');
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
	passVar.focus();
});

// Login
passVar.addEventListener('keyup', (event) =>{
	if (event.keyCode===13) {
		validar(passVar.value);
	}
});

const validar= (password) => {
	if (password==='LABORATORIA') {
		secDiario.style.display='block';
		secInicio.style.display='none';
	} else {
		intentos--;
				if (intentos>0) {
					msAlertaVar.innerHTML=`Clave incorrecta, te quedan ${intentos} intento(s).`;
		passVar.value='';
	} else {
		contAcceso.innerHTML=`<img src="img/icon-bloq.png">`;
		msAlertaVar.innerHTML=`Ya utilizaste todos tus intentos, en este momento no podrás ingresar`;
		secInicio.classList.add("contBloquedo");
	}
 }
}
const borrar = () => {
	areaText.value = '';
	offset.value=''
}
const mostrar= () => {
	secBotonesCipher.style.display='none';
	secBotonesMostrar.style.display='flex';
  areaText.value = cadenaMostrar;
  areaText.setAttribute('readonly', '');
}
const regresar=  () =>{
	cadenaMostrar='';
	areaText.value = '';
	offset.value='';
	secBotonesCipher.style.display='flex';
	secBotonesMostrar.style.display='none';
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