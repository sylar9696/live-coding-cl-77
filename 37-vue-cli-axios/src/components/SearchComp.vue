<template>
  <div class="text-center">
    <label for="search" class="d-block">Cerca personaggi</label>
    <input
      type="text"
      class="my-3"
      placeholder="Cerca..."
      v-model="inputText"
      @keyup="$emit('searchEmitName', inputText)">
  </div>
</template>

<script>
  export default {
    name: 'SearchComp',
    data(){
      return{
        inputText: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
