<template>
  <div id="app">
    <!-- Ciclare l'array di elementi dei personaggi -->
    <h1>I personaggi di Rick & Morty</h1>
    <div class="container">
      <div class="row">
        <CardComp
          v-for="(elem, index) in dataPersonaggi"
          :key="index"
          :card="elem"
          @click="saluto()"
          />
      </div>

    </div>

  </div>
</template>

<script>
  import CardComp from './components/CardComp.vue';
  import axios from 'axios';

  //mounted oppure methods

  export default {
    name: 'App',
    components: {
      CardComp
    },
    data() {
      return {
        dataPersonaggi: ''
      }
    },
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
      }
    }
  }
</script>

<style lang="scss">

</style>
