/* Inizializza un applicativo/istanza vue */
var app = new Vue({
  el: '#root',
  data: {
    nome: '',
    cognome: '',
    titolo: 'Titolo in h1',
    classeDinamica: 'text-red fs-20',
    link: 'https://www.google.it',
    btnDataClass: 'fs-20',
    likes: 20
  },
  methods: {
    saluta: function () {
      return console.log( this.titolo );
    },
    like: function(){
      console.log(this)
      return this.likes++;
    }
  }
});

/*
live snacks:

Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/
