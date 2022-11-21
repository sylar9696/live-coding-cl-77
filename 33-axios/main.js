var app = new Vue({
  el: '#app',
  data: {
    indiceGiochi: ''
  },
  mounted() {
    // Se si usa la funzione normale dentro axios
    // let self = this;
    // console.log(this);

        // axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        //  .then( function (response){
        //   // console.log(this)
        //   // console.log( response.data.game_indices )
        //   let responseData = response.data.game_indices
        //   self.data = responseData
        // })


    //se i usa l a funzione arrow dentro axios
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
         .then( (response) => {
          // console.log( response.data.game_indices )
          let responseData = response.data.game_indices
          this.indiceGiochi = responseData
        })
  },
  created() {

  },
  beforeUpdate() {

  },
  methods: {

  }
})
