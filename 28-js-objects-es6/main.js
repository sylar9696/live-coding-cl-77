// let nome = 'Paolo';
// let cognome = 'Rossi';
// let eta = 30;

// let obj = {

//   nome,
//   cognome,
//   eta

// }

// console.log( obj )

let nome = 'Paolo';
let cognome = 'Rossi';
let eta = 30;

let nomeKey = 'nomeFiscale';

let obj = {

  [nomeKey]: nome,
  cognome,
  eta

}

console.log(obj)

//obj = {
// nomeFiscale = 'Paolo',
// cognome = 'Rossi',
// eta = 30,
// }

const obj2 = {
  marca: 'ford',
  alimentazione: 'benzina'
}

const {
  marca,
  alimentazione
} = obj2;

/*equivalente di: */
// const marca = obj2.marca;
// const alimentazione = obj2.alimentazione;

console.log(marca, alimentazione)


const obj3 = [{
    marca: 'ford',
    alimentazione: 'benzina',
    colore: 'nero'
  },
  {
    marca: 'audi',
    alimentazione: 'benzina',
    colore: 'nero'
  }
]

//destrutturizzazione in un array di oggetti con ciclo

//prima della destrutturizzazione
obj3.forEach((element, index) => {

  console.log(element.marca, element.alimentazione) //1° giro di ciclo: ford benzina, 2° giro di ciclo: audi benzina

})

//con della destrutturizzazione
obj3.forEach(({
  marca,
  alimentazione
}, index) => {

  console.log(marca, alimentazione) //1° giro di ciclo: ford benzina, 2° giro di ciclo: audi benzina

})



//destrutturizzazione di un oggetto singolo su base posizione fissa

// console.log( obj3[1].marca, obj3[1].alimentazione  )


// const { marca, alimentazione } = obj3[1];

// console.log( marca, alimentazione  )

//estrazione dato da un array di array
let arr = [
  ['ford', 'audi'],
  ['piaggio', 'yahmaa']
]

console.log(arr[0][1])



/* spread */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [12, 13];

//vogliamo un arr3 = [1,2,3,4,5,12,13];

let arrTest = [];

for (let i = 0; i < arr1.length; i++) {

  arrTest.push(arr1[i]);

}

for (let k = 0; k < arr2.length; k++) {

  arrTest.push(arr2[k]);

}

console.log(arrTest)

//utilizzando lo spread
let arr3 = [...arr1, ...arr2];

console.log(arr3)




//VOgliamo aggiungere una nuova prorpeita all'ggetto

let obj5 = {
  nome: 'palla',
  colore: 'nero'
}

let dim = obj5.dimensioni = '5cm';


let obj5Copia = {
  ...obj5,
  dim
}

console.log(obj5Copia)


//Esempio slide
let myArguments = [];

function myFunction(...myArguments) {

  console.log(myArguments)

}

myFunction(3, 'pippo');



// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.






function EstrazioneLetter( nomeCognome ) {

  let arrayLettere = [];
  let arrName = nomeCognome.split(' ');
  let stringaIniziali;

  arrName.forEach((elem) => {

    let letteraEstratta = elem.charAt(0).toUpperCase();

    arrayLettere.push(letteraEstratta);

    stringaIniziali = arrayLettere.join('');

  })

  return stringaIniziali
}

console.log( EstrazioneLetter( 'alex Britti' ));
