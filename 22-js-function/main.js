//definisco / creo la funzione
//livello 1
// function sommaNumeri(){
//   console.log( 2+5 )
// }

//livello 2
// let num1 = 2;
// let num2 = 7;

// function sommaNumeri(){
//   console.log( num1 + num2 );
// }

//livello 3
// function sommaNumeri( num1, num2 ){
//   console.log( num1 + num2 );
// }

//livello 4
function sommaNumeri( num1, num2 ){
  //processi logici di codice
  return num1 + num2
}

//invoco la funzione
sommaNumeri( 2, 8 ); //10

document.getElementById('container').innerText = ( sommaNumeri( 2, 8 ) );



/* crea una funzione custom generica per ottenere un numero random tra i due numeri scelti dall'utente */

let numMax = parseInt( prompt('inserisci il massimo numero randomico') )
let numMin = parseInt( prompt('inserisci il minimo numero randomico') )

// function generaRandomNum(){
//   let randomNum = Math.floor(Math.random() * x )

// }


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomInt( numMin, numMax );


console.log( Math.random() ) //min = 0.0 max = 0.999999999999999
console.log( Math.random() * 10) //min = 0.0 //max = 9.99999
console.log( Math.floor(Math.random() * 10) ) //min = 0 //max = 9
console.log( Math.floor(Math.random() * 10) + 5 ) //min = 5  //max = 14
console.log( Math.floor(Math.random() * (10 - 5 + 1)) + 5 ) //min = 5  //max = 10


/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
  - nome normale: 'Bob'
  - nome ribaltato: 'boB'
  - Bob == bob => si
  - parola palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Stampo numeri da 100 a 0
let parola = 'ciao';
let parolaReverse = '';
console.log(parola.length) //lunghezza = 4

for( let i = parola.length - 1 ; i >= 0 ; i-- ){
  parolaReverse += parola[i]

}
console.log( `${parolaReverse}` );
