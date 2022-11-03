/*
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/

//chiedere all'utente
let richiesta = parseInt(prompt('Quanti secondi mancano alla cottura della pasta ?'));
//richiesta : 2

//calcolo il tempo in secondi da usare nella funzione setTimeout
let tempo = richiesta * 1000; //2secondi

//let funzioneCustom = alertCustom('ooooh scola sta pasta!');

/*Prima soluzione con funzione custom */
// setTimeout( alertCustom, tempo );

// function alertCustom(){
//   alert('ooooh scola sta pasta!');
// }

/*Secondo caso con funzione custom + parametri */
function alertCustom2(stringa){
  alert(`${stringa}`);
}

setTimeout( function(){
  alertCustom2('scola sta pasta!');
}, tempo );


//creiamo la funzione per l'orologio digitale
function orologio(){
  let data = new Date();
  console.log( data );

  document.getElementById('time').innerHTML = data.toLocaleTimeString();
}

setInterval(orologio, 1000);


/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
  - creare un array vuoto
  - creare una funzione per generare num random
  - ciclo per generare 5 numeri casuali nell'array / bonus: controllare che siano univoci
  - pushiamo ogni num nell array vuoto
  - stampiamo i pagina i numeri generati
  - nascondo i numeri visualizzati con il css dopo tot secondi
  - far comparire 5 prompt dopo tot secondi

  2 idee :
  - idea 1: salvare in un altro array i numeri scritti dall'utente nei prompt e controllare quali e quanti numeri coincidano con l'array dei num random
  - idea 2: controllare ogni numero che viene scritto dall'utente è incluso nell'array dei num random


Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/
