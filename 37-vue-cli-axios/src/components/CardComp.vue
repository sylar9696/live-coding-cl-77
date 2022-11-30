<template>
  <div class="col-4">
    <div class="card mb-4" style="width: 18rem;">
      <img :src="card.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{card.name}}</h5>
        <span class="card-text">Origin: {{card.origin}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardComp',
    props: {
      card: Object
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
