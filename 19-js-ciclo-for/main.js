/*stampare 10 numeri partendo da zero */

// for( let i = 0; i <= 10; i++){
//   //codice viene stampato e modificato a ogni giro
//   console.log(i)
//   document.getElementById('numero').innerHTML = `<p>il numero è : ${i}</p>`
// }

/*stampare 10 numeri partendo da zero aumento di 2 ogni giro */

let divNumero = document.getElementById('numero');

for (let i = 0; i < 10; i = i + 2) {
  //codice viene stampato e modificato a ogni giro
  console.log(i)

  let stringa = `<p>il tuo numero è : ${i}</p>`
  divNumero.innerHTML += stringa;
}

let ul = document.getElementById('lista');
let li = document.createElement('span');

//aggiungo una classe
li.classList.add('text-primary');
// aggiungo del testo all'interno del tag
li.innerText = 'ciao';
console.log(li)

ul.append(li);

/*
**Consegna:**

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Prima di partire a scrivere codice poniamoci qualche domanda:**

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

**Consigli del giorno:**

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/


//numeri pari e numeri dispari

// let x = 3;

// console.log( x % 2);

// if( x % 2 == 0 ){
//   console.log('il numero è pari')
// } else {
//   console.log('il numero è dispari')
// }

for (let k = 0; k <= 10; k++) {

  if ( k % 2 == 0 ) {
    console.log(`il numero: ${k} è pari`)
  } else {
    console.log(`il numero: ${k} è dispari`)
  }

}
