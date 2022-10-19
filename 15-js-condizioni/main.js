let x = parseInt( prompt('inserisci il numero 4') );
// x = parseInt(x)
console.log(x)

if ( x === 4 ){
  //codice se la variabile corrisponde a 4
  console.log('è giusto')
} else {
  //codice se la variabile NON corrisponde a 4
  console.log('hai sbagliato')
}


let y = 5;

if ( y > 4 && y > 6 ){
  console.log('primo caso');
} else {
  console.log('secondo caso')
}

/*----------------------------*/
let data = new Date()

console.log(data)

let ora = data.getHours();

console.log(ora)

/*----------------------------*/

let numeroRandom = Math.random(); //tra 0 e 0.99999999

console.log(numeroRandom)

let numeroRandom2 = Math.floor( Math.random() * 10 ); //tra 0 e 9

console.log(numeroRandom2)

let numeroRandom3 = Math.floor( Math.random() * 6 ) + 1; //tra 1 e 6
