<template>
  <main class="sfondo">
     <h2>Il contenuto andrà qui</h2>
     <ProdottiComp/>
  </main>
</template>

<script>
import ProdottiComp from './ProdottiComp.vue'
  export default {
    name: 'MainComp',
    components: {
      ProdottiComp
    },
  }
</script>

<style lang="scss" scoped>
  .sfondo{
    background-image: url('../assets/img/fondo-pag-speciali.jpg');
    padding: 100px 0;
  }
</style>
