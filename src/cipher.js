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

// Acciones de Botones
clear.addEventListener('click',borrar);
btnCifra.addEventListener('click', function(){cipher.encode(offset.value, areaText.value.toUpperCase())});
btnDescifra.addEventListener('click', function(){cipher.decode(offset.value, areaText.value.toUpperCase())});
btnCopiar.addEventListener('click',copiar);
btnRegresar.addEventListener('click', regresar);

window.cipher = {
  encode: (offset, string) => {
  	let cantCaracteres=areaText.value.length;
    let cadenaCifrada='';
    
    for (var i = 0; i < cantCaracteres; i++) {
    	let caracterASCII =string.charCodeAt(i);
    	if (caracterASCII >=65 && caracterASCII <=90) {
    		let caracterCifrado=String.fromCharCode((caracterASCII-65+parseInt(offset))%26+65);
    		 cadenaCifrada+=caracterCifrado;
    	} else {
    		cadenaCifrada=cadenaCifrada+String.fromCharCode(caracterASCII);
    	}
    }
    cadenaMostrar=cadenaCifrada;
    mostrar();

  },
  decode: (offset, string) => {
    let cantCaracteres=areaText.value.length;
    let cadenaDescifrada='';
    let caracterDescifrado='';
    
    for (var i = 0; i < cantCaracteres; i++) {
    	let caracterASCII =string.charCodeAt(i);
    	if (caracterASCII >=65 && caracterASCII <=90) {
    			caracterDescifrado=((caracterASCII-65-offset)%26+65);
    		if (caracterDescifrado<65) {    			
    			caracterDescifrado=caracterDescifrado+26;
    			cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterDescifrado);
    		} else {
    		cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterDescifrado);
    		}
    	} else {
    		cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterASCII);
    	}
    }
    cadenaMostrar=cadenaDescifrada;
    mostrar();
  }
};

function borrar() {
	areaText.value = '';
	offset.value=''
}
function mostrar() {
	 // Mostrar y ocultar
    secBotonesCipher.style.display='none';
    secBotonesMostrar.style.display='flex';
    areaText.value = cadenaMostrar;
    areaText.setAttribute('readonly', '');
}
function regresar() {
	cadenaMostrar=''
	areaText.value = '';
	offset.value=''
	secBotonesCipher.style.display='flex';
    secBotonesMostrar.style.display='none';
    areaText.removeAttribute('readonly');
}
function copiar() {
	areaText.focus();
	document.execCommand('selectAll');
	document.execCommand('copy');
	areaText.blur();
}
