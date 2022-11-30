<template>
  <div id="app">
    <!-- Icone font awesome -->
    <font-awesome-icon icon="fa-solid fa-user-secret" />
    <font-awesome-icon icon="fa-solid fa-face-smile" />
    <h1>I personaggi di Rick & Morty</h1>

    <!-- Searchbar come componente -->
    <!-- Componente messo in ascolto dei suoi cambiamenti e dati -->
    <SearchComp @searchEmitName="searchFunction" />

    {{searchFunction()}}

    <div class="container">
      <div class="row">
        <!-- Ciclare l'array di elementi dei personaggi -->
        <!-- CardComp Componente figlio di App.vue -->
        <!-- <CardComp v-for="(elem, index) in dataPersonaggi" :key="index" :card="elem" @click="saluto()" /> -->

        <CardComp v-for="(elem, index) in dataPersonaggi" :key="index" :card="elem" @click="saluto()" />
      </div>
    </div>

  </div>
</template>

<script>
  import CardComp from './components/CardComp.vue';
  import SearchComp from './components/SearchComp.vue';
  import axios from 'axios';

  //mounted oppure methods

  export default {
    name: 'App',
    components: {
      CardComp,
      SearchComp
    },
    data() {
      return {
        dataPersonaggi: [],
        dataPersonaggiFiltrati: [],
        testoEmit: ""
      }
    },
    // computed: {
    //   personaggiFiltrati() {
    //     return this.dataPersonaggi.filter((item) => {
    //             return item.name
    //                 .includes(this.testoEmit);
    //         });
    //   }
    // },
    mounted() {
      // const self = this;
      // console.log('ciao')
      // axios.get('https://api.sampleapis.com/rickandmorty/characters')
      //     .then( (response)=>{
      //       console.log(response.data)
      //     } )
      this.getPersonaggi();
    },
    methods: {
      getPersonaggi() {
        axios.get('https://api.sampleapis.com/rickandmorty/characters')
          .then((response) => {
            //this.dataPersonaggi => recupero l'informazione all'interno di "data"
            //response.data => Abbiamo recuperato l'array di 26 elementi presenti all'interno della response della chiamata GET all'API
            this.dataPersonaggi = response.data
          })
      },
      searchFunction(valoreInput) {
        this.testoEmit = valoreInput

        //dataPersonaggiFiltrati

        if( this.testoEmit !== '' ){
          this.dataPersonaggi.forEach((elem)=>{
            if( elem.name.includes(this.testoEmit) ){
              this.dataPersonaggiFiltrati.push(elem)
            }
          })
        } else {
          this.dataPersonaggiFiltrati = this.dataPersonaggi
        }


        // this.dataPersonaggi.filter( (elem)=>{
        //   return elem.name.toLowerCase().includes( this.testoEmit.toLowerCase() )
        // } )

      }
    }
  }
</script>

<style lang="scss">

</style>
