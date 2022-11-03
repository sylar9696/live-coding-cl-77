//Seleziono la select della difficolta
let difficolta = document.getElementById('difficolta');
//seleziono griglia nell'html
const griglia = document.getElementById('griglia');
//array di bombe compilato dalla funzione
let bombe = [];
//bomba equivalente al numero random generato dalla funzione
let bomba;
//seleziono il div dove dentro ci sarà la frase custom
let frase = document.getElementById('punteggio');
//creo un contatore per il punteggio
let contatore = 0;
//Variabile di controllo se il gioco è finito
let isGameOver = false;

//console.log( griglia );

//creiamo una funzione per creare un div quadrato dentro la griglia
function creazioneQuadrato(num) {
  const div = document.createElement('div');
  div.classList.add('quadrato');
  //inseriamo il numero dentro il div
  div.innerHTML = `<span>${num}</span>`;
  return div; //<div class="quadrato">.....</div>
}

//Attivo il gioco quando cambio difficoltà
difficolta.addEventListener('change', function () {
  //Quando cambio difficolta cambia il numero di celle
  let difficoltaValue = difficolta.value;
  creaGioco(difficoltaValue)
})

//creo una funzione che in base alla difficolta cambia il numero di celle
function creaGioco(livelloDiDifficolta) {
  if (livelloDiDifficolta == 'easy') {
    //100celle
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,100)
    console.log(bombe)
    creaCelle(100)
  } else if (livelloDiDifficolta == 'medium') {
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,81)
    console.log(bombe)
    //81 celle
    creaCelle(81)
  } else if (livelloDiDifficolta == 'hard') {
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,49)
    console.log(bombe)
    //49 celle
    creaCelle(49)
  }
}


//funzione crea celle
function creaCelle(numeroCelle) {

  //Pulisco la griglia
  griglia.innerHTML = '';
  frase.innerHTML = '';
  isGameOver = false;

  for (let i = 1; i <= numeroCelle; i++) {

    let elementoCorrente = creazioneQuadrato(i);
    //console.log(elementoCorrente);

    elementoCorrente.addEventListener('click', function () {

      let numeroNellaCella = parseInt(this.firstChild.innerHTML)

      if ( !isGameOver ) {
        if ( bombe.includes(numeroNellaCella )) {
          //Se becco la bomba
          //al click della cella viene aggiunta la classe "bomba" per lo sfondo rosso che segna la sconfitta
          this.classList.toggle('bomba');

          //ciclo tutte le celle da zero e controllo quali sono le bombe, ogni volta che ne trovo una aggiungo la classe "bomba"
          for (let y = 0; y < numeroCelle; y++) {
            if ( bombe.includes( parseInt(griglia.children[y].firstChild.innerHTML )) ) {
              griglia.children[y].classList.add('bomba');
            }
          }

          //Cambio la variabile di controllo per non per avere più accesso alle funzioni al click e terminare così la partita
          isGameOver = true;

          frase.innerHTML = `<p>La partita è terminata hai perso, il tuo punteggio finale è: ${contatore}</p>`
        } else {
          //Se non becco la bomba
          //al click della cella viene aggiunta la classe "salvo" perchè non era una bomba
          this.classList.toggle('salvo');
          //aumento il punteggio ogni volta che non clicco su una bomba
          contatore++;
        }
      }


    })

    griglia.append(elementoCorrente);

  }
}


//livello 2 campo minato

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
function generaBombe(bombaMin, bombaMax) {

  //Ciclo for per ottenere un ciclo di 16 giri
  for (let k = 0; k < 16; k++) {
    //ciclo do while per generare un numero random e poi controllare se già presente nell'array nel caso ci sia già il ciclo do while ricomincia e viene generato n altro numero
    do {
      bomba = getRandomInt(bombaMin, bombaMax)
    } while (bombe.includes(bomba));

    //Push del numero dopo il controllo nell'array
    bombe.push(bomba);

  }
}


//Funzione per generare un numero random tra min e max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//😊 In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// 😊 La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// 😊 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// BONUS ❌:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Superbonus 1
// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
// Superbonus 2 😊
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.


// function myFunction(){
//     ///il codice
// }

//versione arrow
// let myFunction = () =>{
//   return 1+1;
// }

// console.log( myFunction() )

// console.log('test: ', document.getElementById('griglia').children ) //genera un array composto dai figli dell'elemento padre



// for(let k=0; k < griglia.children.length; k++ ){

//   console.log( griglia.children[k].firstChild )

// }

// let array = [];

// for(let y=0; y < 100; y++ ){

//   array.push( griglia.children[2] );

// }



//creiamo una funzione
// function myFunction() {
//   return 1 + 1;
// }

//creiamo una funzione con parametri
// function myFunction(num1, num2) {
//   return num1 + num2; //8+5
// }

//invocare la funzione
// console.log( myFunction(8, 5) );


//creiamo una funzione che scrive "Hello Marco" in console
// let inputValue = document.getElementById('nome');

// let btn = document.getElementById('btnInvia');

// //attiviamo una funzione al click
// btn.addEventListener('click', function(){
//   ciaoMarco( inputValue.value, "com'è andata la giornata?" )
// } );

// function ciaoMarco(nome, chiedere){
//   //mio codice
//   console.log(`Hello ${nome}, ${chiedere}`);
// }

// ciaoMarco()
