var app = new Vue({
  el: '#app',
  data: {
    obj: [
          { id: 1, nome: 'pippo', colore: 'rosso' },
          { id: 2, nome: 'pluto', colore: 'blue' },
          { id: 3, nome: 'paperino', colore: 'green' }
    ],
    indice: 0,
  },
  methods: {
    cambiaOggettoRight: function(){
      let lunghezza = this.obj.length - 1;
      console.log( lunghezza )

      if( this.indice >= lunghezza  ){
        return this.indice = 0;
      } else {
        return this.indice++;
      }
    }
  }
})

// - realizzare uno slider
      // - ci sono anche 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini

      //BONUS:
      // - nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
      // - a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra
