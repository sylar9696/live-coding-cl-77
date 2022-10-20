//salutare un nome, se nome è maschio utiliziamo un colore blu se è femmina un colore rosa

const element = document.getElementById('nome')

let nome = 'andrea';
element.innerHTML = nome;


// if ( nome === "andrea" ){
//   element.style.backgroundColor = 'blue';
//   element.style.color = 'white';
// } else if( nome === "alessia" ) {
//   element.style.color = 'pink';
// }

// Al click di un pulsante, deve apparire un alert con un numero random

let bottone = document.getElementById('numeroRandom');
// let numeroRandomico = Math.floor(Math.random() * 10) + 1;


// bottone.addEventListener('click', function() {
//   let numeroRandomico = Math.floor(Math.random() * 10) + 1;
//   alert( numeroRandomico );
// } )

console.log( Math.random() ); //compreso tra 0 e 0.999999999

bottone.addEventListener('click', function() {
  alert( generaNumeroRandom(2, 1000) ); //2 e arriva a un max di 1000
});

function generaNumeroRandom(min, max){
  return Math.floor(Math.random() * max) + min;
}

/* Breve dark mode */

function darkMode(){
  document.querySelector('body').backgroundColor = 'black';
  element.classList.add('darkText', 'text-center');
}
