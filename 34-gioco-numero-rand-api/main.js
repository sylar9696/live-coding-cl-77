//Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc.
// Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.

//1- Quale API ci serve?
//API che ci serve per lavorare: https://flynn.boolean.careers/exercises/api/random/int

//2- Quando attivare la richiesta all'api?
//quando clicchiamo sul bottone gioca

//3- Dove salviamo i dati dell'api estratti ?
//Dentro una variabile nei DATA dell'istanza Vue

var app = new Vue({
  el: '#app',
  data: {
    //3
    numeroRandomPersonale: '',
    numeroRandomPC: '',
    stiamoGiocando: false,
    testo: ''
  },
  mounted() {

  },
  created() {

  },
  beforeUpdate() {

  },
  methods: {
    gioca() {
      this.stiamoGiocando = true
      //2- chiamo l'api
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((response) => {
          //console.log(response.data.response, this)
          let numeroPersonale = response.data.response
          this.numeroRandomPersonale = numeroPersonale
        })

      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((response) => {
          //console.log(response.data.response, this)
          let numeroPc = response.data.response
          this.numeroRandomPC = numeroPc
        })

      if(this.numeroRandomPersonale > this.numeroRandomPC){
        this.testo = 'Abbiamo vinto'
      } else if(this.numeroRandomPersonale < this.numeroRandomPC){
        this.testo = 'Abbiamo perso'
      } else {
        this.testo = 'Abbiamo pareggiato'
      }
    }
  }
})

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


// for(ciclo fino a 10 volte){
//   axios.get()
// }
