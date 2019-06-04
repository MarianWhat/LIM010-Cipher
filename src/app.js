const passVar = document.getElementById('pass');
const msAlertaVar =document.getElementById('msAlerta');
const contAccesoVar= document.getElementById('contAcceso');
const secInicio= document.getElementById('sec-inicio');
const secDiario=document.getElementById('sec-diario');

let intentos = 3;

// Login
passVar.addEventListener('keyup', function(event){
	if (event.keyCode===13) {
		validar(passVar.value);
	}
});

function validar(password) {
	if (password==='LABORATORIA') {
		secDiario.style.display='block';
		secInicio.style.display='none';
	} else {
		intentos--;
		if (intentos>0) {
		msAlertaVar.innerHTML=`Clave incorrecta, te quedan ${intentos} intento(s).`;
	} else {
		contAccesoVar.innerHTML=`<img src="img/icon-bloq.png">`;
		msAlertaVar.innerHTML=`Ya utilizaste todos tus intentos, en este momento no podrás ingresar`;
		secInicio.classList.add("contBloquedo");

	}
 }
}

//Cifraado