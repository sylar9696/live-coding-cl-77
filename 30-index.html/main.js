var app = new Vue({
  el: '#app',
  data: {
    titolo: 'Vue cicli',
    classeDinamica: 'text-primary',
    linkImmagine: 'https://picsum.photos/200/300',
    variabileMostraNascondi: true,
    paragrafo: 'ciao sono il primo testo che compare',
    names: ['paolo', 'andrea', 'marco', 'alice'],
    obj: [
          { id: 1, nome: 'pippo', colore: 'rosso' },
          { id: 2, nome: 'pluto', colore: 'blue' },
          { id: 3, nome: 'paperino', colore: 'green' }
    ],
    indice: 0,
  },
  mounted: function(){
    console.log('mounted')
  },
  created: function () {
    console.log('created')
  },
  update: function () {
    console.log('update')
  },
  methods: {
    nomeFunzione: function () {
      this.variabileMostraNascondi = false;
    },
    randomSemplice: function(){
      return Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    },
    randomParam:  function(min, max){
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    cambiaOggettoRight: function(){
      this.indice++;
      if( this.indice > this.obj.length ){
        return this.indice = 0;
      }
    }
  }
})

// - realizzare uno slider
      // - ci sono anche 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini

      //BONUS:
      // - nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
      // - a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra
