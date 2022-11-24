<template>
  <div class="buttonComp">
    {{propsText}}
  </div>
</template>

<script>
  export default {
    props: {
      propsText: String,

    }
  }
</script>

<style lang="scss" scoped>
  .buttonComp{
    border: 2px solid red;
    padding: 10px;
  }
</style>
