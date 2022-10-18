// console.log('ciao')

// 3 modi per scrivere nel documento html
document.writeln('Hello World!');
alert('Hello World!');
document.getElementById('mioDiv').innerHTML = '<p class="box">Hello World!</p>';

// Esempio con innertext
//document.getElementById('mioDiv').innerText = '<p>Hello World!</p>';

// variabili associate alla selezione di un elemento html
let divHtml = document.getElementById('mioDiv');
divHtml.innerHTML = '<p class="box">Hello World!</p>';

let nome = 'alessandro';

console.log(nome); //alessandro
//da qui il valore di "nome" viene modificato in "marco"
nome = 'marco';

console.log( nome ); //marco

//dichiaro una variabile  senza valore iniziale
let anni = 26;
let saluto = '';
// console.log(saluto)

console.log( anni )

//saluto = 'ciao' + ' ' + nome + ' ' + 'ho' + ' ' + anni + ' ' + 'anni';

//templating literal ES6
saluto = `ciao ${nome} ho ${anni + 10} anni`;

console.log(saluto);


/*-------------------------------------------*/

//chiedere all'utente quanti anni ha, calcolare l'anno di nascita, scrivere una frase esempio "sei nato nel ......."

/*
- chiedere gli anni:
  - utilizzare la funzione prompt()
  - salvare il valore in una variabile

- calcolare l'anno di nascita:
  - utilizzare l'anno corrente - l'anno età

- scrivere la frase:
  - scrivere la frase in un document.getElementById().innerHTML

*/

let annoDiNascita = prompt('Scrivimi quanti anni hai:');
//console.log(annoDiNascita);

let annoCorrente = 2022;

//let annoNascita = annoCorrente - annoDiNascita;
//console.log(annoNascita);

let frase = `il tuo anno di nascita è = ${annoNascita}`
// let frase2 = 'il tuo anno di nascita è =' + annoNascita

document.getElementById('fraseJavascript').innerHTML = `il tuo anno di nascita è ${annoCorrente - annoDiNascita}`


/*
Chiedi all’utente il suo nome,
  - prompt('chiedere il nome:.......)
poi chiedi il suo cognome,
  - prompt('chiedere il cognome:.......)
poi chiedi il suo colore preferito
  - prompt('chiedere il colore:.......)
Infine scrivi sulla pagina "la tua password è: nomecognomecolorepreferito21"
  - il 21 è un numero ha vostra scelta
  - getElementById().innerHTML = ".....valore password....."
  `la tua password è: ${nome}${colore}{}`
*/
