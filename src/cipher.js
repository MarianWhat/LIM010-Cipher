window.cipher = {
  encode: (offset, string) => {
    let cantCaracteres=string.length;
    let cadenaCifrada='';
    for (var i = 0; i < cantCaracteres; i++) {
      let caracterASCII =string.charCodeAt(i);
      let cifradoEnASCII;
      if (caracterASCII >=32 && caracterASCII <=254) {
         cifradoEnASCII=(caracterASCII-32+parseInt(offset))%222+32;
          if (cifradoEnASCII<32) {  
          cifradoEnASCII=cifradoEnASCII+222;
          }
        let caracterCifrado=String.fromCharCode(cifradoEnASCII);
        cadenaCifrada+=caracterCifrado;
        } else {
         cadenaCifrada=cadenaCifrada+String.fromCharCode(caracterASCII);
       }
     }
     return cadenaCifrada;
   },
   decode: (offset, string) => {
    let cantCaracteres=string.length;
    let cadenaDescifrada='';
    let caracterDescifrado='';
    for (var i = 0; i < cantCaracteres; i++) {
      let caracterASCII =string.charCodeAt(i);
      if (caracterASCII >=32 && caracterASCII <=254) {
        caracterDescifrado=((caracterASCII-32-offset)%222+32);
        if (caracterDescifrado<32) {          
         caracterDescifrado=caracterDescifrado+222;
         cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterDescifrado);
       } else {
       cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterDescifrado);
       }
      } else {
       cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterASCII);
      }
    }
    return cadenaDescifrada;
  }
};


// CIPHER BASICO
// window.cipher = {
//   encode: (offset, string) => {
//     let cantCaracteres=string.length;
//     string = string.toUpperCase()
//     let cadenaCifrada='';
//     for (var i = 0; i < cantCaracteres; i++) {
//       let caracterASCII =string.charCodeAt(i);
//       let cifradoEnASCII;
//       if (caracterASCII >=65 && caracterASCII <=90) {
//          cifradoEnASCII=(caracterASCII-65+parseInt(offset))%26+65;
//           if (cifradoEnASCII<65) {  
//           cifradoEnASCII=cifradoEnASCII+26;
//         }
//         let caracterCifrado=String.fromCharCode(cifradoEnASCII);
//         cadenaCifrada+=caracterCifrado;

//         } else {
//          cadenaCifrada=cadenaCifrada+String.fromCharCode(caracterASCII);
//        }
//      }
//      return cadenaCifrada;
//    },
//    decode: (offset, string) => {
//     let cantCaracteres=string.length;
//     string = string.toUpperCase();
//     let cadenaDescifrada='';
//     let caracterDescifrado='';
//     for (var i = 0; i < cantCaracteres; i++) {
//       let caracterASCII =string.charCodeAt(i);
//       if (caracterASCII >=65 && caracterASCII <=90) {
//         caracterDescifrado=((caracterASCII-65-offset)%26+65);
//         if (caracterDescifrado<65) {          
//          caracterDescifrado=caracterDescifrado+26;
//          cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterDescifrado);
//        } else {
//        cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterDescifrado);
//        }
//       } else {
//        cadenaDescifrada=cadenaDescifrada+String.fromCharCode(caracterASCII);
//       }
//     }
//     return cadenaDescifrada;
//   }
// };