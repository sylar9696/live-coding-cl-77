/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  - chiedere i kilometri
  - chiedere l'età
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  -condizioni:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
      va applicato uno sconto del 20% per i minorenni
      va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
  - scrivere il prezzo
  - limitare il prezzo a  2 decimali
  - console.log( parseFloat(numero.toFixed(2)) )

*/
console.log('ciao')
//Selezione elementi HTML
let inputKm = document.getElementById('inputKm');
let inputEta = document.getElementById('inputEta');

//Aggiungo un titolo da javascript
document.getElementById('header').innerHTML = `<h2>Biglietto del treno</h2>`

//funzione attivata dal click del bottone nell'html

function recuperoDati() {

  let km = parseInt(inputKm.value);
  let eta = parseInt(inputEta.value);
  console.log(km, eta);

  //controllo se i campi sono stati compilati
  if (inputKm.value == "" && inputEta.value == "") {
    document.getElementById('congratulazioni').innerHTML = `<p class="alert alert-danger mt-5" role="alert">Devi compilare tutti i campi!!!</p>`
  } else {
    let prezzoBiglietto = km * 0.21;
    //condizioni per gestione del prezzo
    if( eta >= 18 && eta < 65 ){
      document.getElementById('boxPrezzo').innerHTML = `Il prezzo del biglietto è: ${ prezzoBiglietto.toFixed(2) }`;
    } else if( eta < 18 ){
      document.getElementById('boxPrezzo').innerHTML = `Il prezzo del biglietto è: ${ (prezzoBiglietto * 0.80).toFixed(2) }`;
    } else {
      document.getElementById('boxPrezzo').innerHTML = `Il prezzo del biglietto è: ${ (prezzoBiglietto * 0.60).toFixed(2) }`;
    }


    document.getElementById('congratulazioni').innerHTML = `<p class="alert alert-success mt-5" role="alert">Bravo hai inviato tutti i dati i km percorsi sono: ${km}</p>`

  }
}
