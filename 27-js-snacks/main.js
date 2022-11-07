const automobili = [{
    marca: 'ford',
    modello: 'fiesta',
    alimentazione: 'benzina'
  },
  {
    marca: 'citroen',
    modello: 'c4',
    alimentazione: 'metano'
  },
  {
    marca: 'volkswagen',
    modello: 'polo',
    alimentazione: 'diesel'
  },
  {
    marca: 'audi',
    modello: 'a3',
    alimentazione: 'elettrico'
  },
  {
    marca: 'audi',
    modello: 'a5',
    alimentazione: 'diesel'
  },
  {
    marca: 'audi',
    modello: 'a7',
    alimentazione: 'gpl'
  }
]

/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

Infine stampa separatamente i 3 array.
*/

const autoBenzina = automobili.filter( ( element ) => {
  // console.log( element );
  if( element.alimentazione == 'benzina' ){
    return true
  }

}  )

const autoDiesel = automobili.filter( ( element ) => {
  // console.log( element );
  if( element.alimentazione == 'diesel' ){
    return true
  }

}  )

const autoDiverse = automobili.filter( ( element ) => {
  // console.log( element );
  if( element.alimentazione != 'benzina' && element.alimentazione != 'diesel' ){
    return true
  }

}  )

console.log( autoBenzina, autoDiesel  )

console.log( autoDiverse );

/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

- ciclo map
- chartAt
*/

const arr = ['pippo', 'PLUTO', 'Paperino'];

// const str = 'PIPPO';

// console.log( str.charAt( 0 ).toUpperCase() ); //P
// console.log( str.slice(1).toLowerCase() ) //ippo

// console.log( str.charAt( 0 ).toUpperCase() + str.slice(1).toLowerCase() )

//ciclo sull'array originale con il foreach, estrazione di un elmeento alla volta, con funzioni per modificare il singolo elmento per ottenere la stringa in formato capitalized (prima lettera maiuscola e il resto in minuscolo)
arr.forEach( (element) => {
  console.log( element.charAt( 0 ).toUpperCase() + element.slice(1).toLowerCase() )
} )

//creazione di un array separato con all'interno lo stesso numero di elementi dopo la trasformazione delle stringhe
const arr2 = arr.map( (element) => {
  return element.charAt( 0 ).toUpperCase() + element.slice(1).toLowerCase();
} )

console.log( arr2 )


/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const arr3 = [{
    nome: 'marco',
    cognome: 'rossi',
    eta: 15,
  },
  {
    nome: 'paolo',
    cognome: 'rossi',
    eta: 20,
  },
  {
    nome: 'domenico',
    cognome: 'rossi',
    eta: 10,
  }
]

// const nuovoArray = arr3.map( ( element ) => {
//   if( element.eta >= 18 ){
//     return element.guidare = 'si'
//   } else {
//     return element.guidare = 'no'
//   }
// } )

//Destrutturizzazione di un oggetto
const nuovoArray = arr3.map( ( {nome, cognome, eta} ) => {

  if( eta >= 18 ){
    const guidare = 'si'

    // const oggetto = {
    //   nome: element.nome,
    //   cognome: element.cognome,
    //   guidare: element.guidare = si
    // }

    // return oggetto

    return { nome, cognome, guidare }
  } else {
    const guidare = 'no'
    return { nome, cognome, guidare }
  }
} )

console.log( nuovoArray )



/*
Snack 1
Dato l'array di nomi:

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.

esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

Snack 2
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/
