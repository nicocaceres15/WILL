/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
 // var numToString = num.ToString()
//var numero = numToString.split("")
//for (let i = 0; i < numero.length ; i++) {
  //var numString = numAlReves[i].split("");
  //var alReves = numero[i].reverse();
  //numero[i] = alReves.join("");
  //numero.join("")
  //if (numero[i] === numToString){
  //  return true;
 // }else {
 //   return false;
//  }
//}
let numString = num.toString()
let stringConvertido = numString.split("")
let stringAlReves = stringConvertido.reverse()
let string = stringAlReves.join("")
  if (numString === string){
    return true;
  }else {
    return false;
  }
}




// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico