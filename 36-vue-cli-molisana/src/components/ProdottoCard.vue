<template>
  <div class="card">
    <!-- Immagine -->

    <img :src="dettagliProdotto.src" alt="">
    <h4>{{ dettagliProdotto.titolo }}</h4>
    <div v-for="(elem, index) in dettagliProdotto.tipi" :key="index">
      <span>Tipi: {{ elem.forma }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProdottoCard',
    props: {
      dettagliProdotto: Object
    }
  }
</script>

<style lang="scss" scoped>
.card{
  background-color: white;
  width: calc(100% / 4);
}
</style>
