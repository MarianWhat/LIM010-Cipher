window.cipher = {
  encode: (offset, string) => {
    let cantCaracteres=string.length;
    let cadenaCifrada='';
    let cifradoEnASCII;
    const cifrar = (inicio,caracterASCII,campo) =>{
      cifradoEnASCII=(caracterASCII-inicio+parseInt(offset))%campo+inicio;
      if (cifradoEnASCII<inicio) {  
          cifradoEnASCII=cifradoEnASCII+campo;
        }
      }
    for (var i = 0; i < cantCaracteres; i++) {
      let caracterASCII =string.charCodeAt(i);
      //De 32 a 47
      if (caracterASCII >=32 && caracterASCII <=47) {
        cifrar(32,caracterASCII,16);
      }
      //De Numeros 48 a 57
      if (caracterASCII >=48 && caracterASCII <=57) {
        cifrar(48,caracterASCII,10);
      }
      //De signos 58 a 64
      if (caracterASCII >=58 && caracterASCII <=64) {
        cifrar(58,caracterASCII,7);
      }
      //De Letras Mayusculas 65 a 90
      if (caracterASCII >=65 && caracterASCII <=90) {
        cifrar(65,caracterASCII,26);
      }
      //De signos 91 a 96
      if (caracterASCII >=91 && caracterASCII <=96) {
        cifrar(91,caracterASCII,6);
      }
      //De Letras Minusculas 97 a 122
      if (caracterASCII >=97 && caracterASCII <=122) {
        cifrar(97,caracterASCII,26);
      }
      //De caracteres de 123 a 126
      if (caracterASCII >=123 && caracterASCII <=126) {
        cifrar(123,caracterASCII,4);
      }
      //De caracteres de 128 a 254
      if (caracterASCII >=128 && caracterASCII <=254) {
        cifrar(128,caracterASCII,127);
      }
      let caracterCifrado=String.fromCharCode(cifradoEnASCII);
      cadenaCifrada+=caracterCifrado;
    }
     return cadenaCifrada;
   },
   decode: (offset, string) => {
    let cantCaracteres=string.length;
    let cadenaDescifrada='';
    let DescifradoEnASCII;
    const decifrar = (inicio,caracterASCII,campo) =>{
      DescifradoEnASCII=(caracterASCII-inicio-parseInt(offset))%campo+inicio;
      if (DescifradoEnASCII<inicio) {  
          DescifradoEnASCII=DescifradoEnASCII+campo;
        }
      }
    for (var i = 0; i < cantCaracteres; i++) {
      let caracterASCII =string.charCodeAt(i);
      //De 32 a 47
      if (caracterASCII >=32 && caracterASCII <=47) {
        decifrar(32,caracterASCII,16);
      }
      //De Numeros 48 a 57
      if (caracterASCII >=48 && caracterASCII <=57) {
        decifrar(48,caracterASCII,10);
      }
      //De signos 58 a 64
      if (caracterASCII >=58 && caracterASCII <=64) {
        decifrar(58,caracterASCII,7);
      }
      //De Letras Mayusculas 65 a 90
      if (caracterASCII >=65 && caracterASCII <=90) {
        decifrar(65,caracterASCII,26);
      }
      //De signos 91 a 96
      if (caracterASCII >=91 && caracterASCII <=96) {
        decifrar(91,caracterASCII,6);
      }
      //De Letras Minusculas 97 a 122
      if (caracterASCII >=97 && caracterASCII <=122) {
        decifrar(97,caracterASCII,26);
      }
      //De caracteres de 123 a 126
      if (caracterASCII >=123 && caracterASCII <=126) {
        decifrar(123,caracterASCII,4);
      }
      //De caracteres de 128 a 254
      if (caracterASCII >=128 && caracterASCII <=254) {
        decifrar(128,caracterASCII,127);
      }
     cadenaDescifrada=cadenaDescifrada+String.fromCharCode(DescifradoEnASCII);
    }
    return cadenaDescifrada;
  }
};