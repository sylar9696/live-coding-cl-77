//creare un array della squadra

let squadra = ['paolo', 'ilario', 'andrea'];
console.log(squadra[0]); //paolo
console.log(squadra[1]); //ilario

// squadra[1] => 'ilario';


// console.log( squadra );
// console.log( `la squadra p formata da tot: ${squadra.length} persone` );

// console.log( squadra[0] );

// squadra.push('gabriele');
// console.log(squadra)

// const inputName = document.getElementById('inputName');

let lista = document.getElementById('lista');


function iscriviti() {
  //reset dei campi
  // lista.innerHTML = '';
  let valueName = inputName.value;
  // if( valueName == '' ){
  //   console.log('compila il campo!')
  // } else {
  //   squadra.push(valueName);
  // }

  // console.log(squadra);


  //inserire nuovi elementi in coda all'array
  // squadra.push(valueName);

  // for (let i = 0; i < squadra.length; i++) {
  //   console.log( squadra[i] );
  //   lista.innerHTML += `<li>${ squadra[i] }</li>`;
  // }

  //controllare se ilario è nella squadra
  let nomeControllato = 'ilario';

  for (let i = 0; i < squadra.length; i++) {

    if( squadra[i] == nomeControllato ){
      console.log( `${nomeControllato} è presente nella squadra, con posizione: ${i}` );
      //togliere l'elemento trovato
      squadra.splice(i, 1);
    }

  }


};

let array = [];

// squadra.pop();

/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/
