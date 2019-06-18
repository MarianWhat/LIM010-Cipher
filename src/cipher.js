window.cipher = {
  encode: (offset, string) => {
    let cantCaracteres=string.length;
    let cadenaCifrada='';
    let cifradoEnASCII;

    for (var i = 0; i < cantCaracteres; i++) {
      let caracterASCII =string.charCodeAt(i);
      //De 32 a 47
      if (caracterASCII >=32 && caracterASCII <=47) {
        cifradoEnASCII=(caracterASCII-32+parseInt(offset))%16+32;
        if (cifradoEnASCII<32) {  
          cifradoEnASCII=cifradoEnASCII+16;
        }
      }
      //De Numeros 48 a 57
      if (caracterASCII >=48 && caracterASCII <=57) {
        cifradoEnASCII=(caracterASCII-48+parseInt(offset))%10+48;
        if (cifradoEnASCII<48) {  
          cifradoEnASCII=cifradoEnASCII+10;
        }
      }
      //De signos 58 a 64
      if (caracterASCII >=58 && caracterASCII <=64) {
        cifradoEnASCII=(caracterASCII-58+parseInt(offset))%10+58;
        if (cifradoEnASCII<58) {  
          cifradoEnASCII=cifradoEnASCII+10;
        }
      }
      //De Letras Mayusculas 65 a 90
      if (caracterASCII >=65 && caracterASCII <=90) {
        cifradoEnASCII=(caracterASCII-65+parseInt(offset))%26+65;
        if (cifradoEnASCII<65) {  
          cifradoEnASCII=cifradoEnASCII+26;
        }
      }
      //De signos 91 a 96
      if (caracterASCII >=91 && caracterASCII <=96) {
        cifradoEnASCII=(caracterASCII-91+parseInt(offset))%6+91;
        if (cifradoEnASCII<91){  
          cifradoEnASCII=cifradoEnASCII+6;
        }
      }
      //De Letras Minusculas 97 a 122
      if (caracterASCII >=97 && caracterASCII <=122) {
        cifradoEnASCII=(caracterASCII-97+parseInt(offset))%26+97;
        if (cifradoEnASCII<97) {  
          cifradoEnASCII=cifradoEnASCII+26;
        }
      }
      //De caracteres de 97 a 122
      if (caracterASCII >=123 && caracterASCII <=126) {
        cifradoEnASCII=(caracterASCII-123+parseInt(offset))%4+123;
        if (cifradoEnASCII<123) {  
          cifradoEnASCII=cifradoEnASCII+4;
        }
      }
      //De caracteres de 128 a 254
      if (caracterASCII >=128 && caracterASCII <=254) {
        cifradoEnASCII=(caracterASCII-128+parseInt(offset))%127+128;
        if (cifradoEnASCII<128) {  
          cifradoEnASCII=cifradoEnASCII+127;
        }
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
    for (var i = 0; i < cantCaracteres; i++) {
      let caracterASCII =string.charCodeAt(i);
      //De 32 a 47
      if (caracterASCII >=32 && caracterASCII <=47) {
        DescifradoEnASCII=(caracterASCII-32-parseInt(offset))%16+32;
        if (DescifradoEnASCII<32) {  
          DescifradoEnASCII=DescifradoEnASCII+16;
        }
      }
      //De Numeros 48 a 57
      if (caracterASCII >=48 && caracterASCII <=57) {
        DescifradoEnASCII=(caracterASCII-48-parseInt(offset))%10+48;
        if (DescifradoEnASCII<48) {  
          DescifradoEnASCII=DescifradoEnASCII+10;
        }
      }
      //De signos 58 a 64
      if (caracterASCII >=58 && caracterASCII <=64) {
        DescifradoEnASCII=(caracterASCII-58-parseInt(offset))%10+58;
        if (DescifradoEnASCII<58) {  
          DescifradoEnASCII=DescifradoEnASCII+10;
        }
      }
      //De Letras Mayusculas 65 a 90
      if (caracterASCII >=65 && caracterASCII <=90) {
        DescifradoEnASCII=(caracterASCII-65-parseInt(offset))%26+65;
        if (DescifradoEnASCII<65) {  
          DescifradoEnASCII=DescifradoEnASCII+26;
        }
      }
      //De signos 91 a 96
      if (caracterASCII >=91 && caracterASCII <=96) {
        DescifradoEnASCII=(caracterASCII-91-parseInt(offset))%6+91;
        if (DescifradoEnASCII<91){  
          DescifradoEnASCII=DescifradoEnASCII+6;
        }
      }
      //De Letras Minusculas 97 a 122
      if (caracterASCII >=97 && caracterASCII <=122) {
        DescifradoEnASCII=(caracterASCII-97-parseInt(offset))%26+97;
        if (DescifradoEnASCII<97) {  
          DescifradoEnASCII=DescifradoEnASCII+26;
        }
      }
      //De caracteres de 97 a 122
      if (caracterASCII >=123 && caracterASCII <=126) {
        DescifradoEnASCII=(caracterASCII-123-parseInt(offset))%4+123;
        if (DescifradoEnASCII<123) {  
          DescifradoEnASCII=DescifradoEnASCII+4;
        }
      }
      //De caracteres de 128 a 254
      if (caracterASCII >=128 && caracterASCII <=254) {
        DescifradoEnASCII=(caracterASCII-128-parseInt(offset))%127+128;
        if (DescifradoEnASCII<128) {  
          DescifradoEnASCII=DescifradoEnASCII+127;
        }
      }
     cadenaDescifrada=cadenaDescifrada+String.fromCharCode(DescifradoEnASCII);
    }
    return cadenaDescifrada;
  }
};