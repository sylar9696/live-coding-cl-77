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
          { id: 2, nome: 'pluto', colore: 'blue' }
          ]
  },
  methods: {
    nomeFunzione: function () {
      this.variabileMostraNascondi = false;
    }
  }
})
