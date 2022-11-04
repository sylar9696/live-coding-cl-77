const palla = {
  colore: ['red', 'blue'],
  nome: 'palla da bimbo'
}


console.log(palla)
console.log(palla.colore) //array

//ciclo l'array di proprietà "colore" ad esempio per stamparle
for (let i = 0; i < palla.colore.length; i++) {
  console.log(palla.colore[i]);
}

palla.peso = 46;

palla.peso = 30;

console.log(palla);

//stampare tutti i valori dell'oggetto e nel caso le chiavi
for (let key in palla) {

  console.log('la chiave:', key);
  console.log(palla[key])
}







//domestici e selvatici
const animali = [
  ['cane', 'gatto'],
  ['orso', 'gorilla', 'tigri']
]

// animali.length = 2

//stampiamo cane in console
console.log(animali[0][0]);

//Stampiamo gorilla
console.log(animali[1][1])

///stampiamo tutti gli array
for (let i = 0; i < animali.length; i++) {

  console.log(animali[i])
  let elementoCorrente = animali[i];

  for (let k = 0; k < elementoCorrente.length; k++) {
    console.log(elementoCorrente[k])
  }

}









/*
Utilizzando i dati forniti, creare un ARRAY DI OGGETTI per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/


let staff = [{
    nome: 'marco',
    professione: 'ceo',
    immagine: 'screenshot.png'
  },
  {
    nome: 'tommaso',
    professione: 'co-ceo',
    immagine: 'screenshot.png'
  },
  {
    nome: 'yuri',
    professione: 'designer',
    immagine: 'screenshot.png'
  },
  {
    nome: 'andrea',
    professione: 'astronauta',
    immagine: 'screenshot.png'
  }
]

let percorso = './img/';

// //stampare tutti i nomi
// document.getElementById('nomi').innerHTML = ..

for (let i = 0; i < staff.length; i++) {
  //a ogni giro del ciclo ottengo il singolo oggetto
  let elementoCorrente = staff[i];
  console.log(elementoCorrente.nome)

  document.getElementById('card').innerHTML +=
  `
  <div class="card" style="width: 18rem;">
    <img src=${percorso + elementoCorrente.immagine} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${elementoCorrente.nome}</h5>
      <p class="card-text">${elementoCorrente.professione}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
}
