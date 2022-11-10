/* Inizializza un applicativo/istanza vue */
var app = new Vue({
  el: '#root',
  data: {
    textColor: 'text-danger'
  },
  methods: {
    btnBlu: function(){
      if( this.textColor == 'text-danger' ){
        return this.textColor = 'text-primary'
      } else {
        return this.textColor = 'text-danger'
      }
    }
  }
});

/*
live snacks:

Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/
