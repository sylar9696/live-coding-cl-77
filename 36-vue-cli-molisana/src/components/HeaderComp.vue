<template>
  <header>
    <!-- Nostro codice -->
    <!-- Logo -->
    <img src="../assets/img/la-molisana-logo.png" alt="Logo Molisana">
    <!-- Menu -->
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li class="active">
          <a href="#">Prodotti</a>
        </li>
        <li>
          <a href="#">Chi siamo</a>
        </li>
        <li>
          <a href="#">Contatti</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//Stile del componente
@import "../style/variabili";
@import "../style/mixin";
@import "../style/cicli";

ul{
  // display: flex;
  // justify-content: center;
  @include center( $tipologia: 'both' );

  li{
    list-style-type: none;
    margin: $margin-x;
    padding: 10px;

    &:hover{
      background-color: red;
    }

    a{
      text-decoration: none;
      color: black;
    }

  }

}

.active{
  background-color: lightblue;
}
</style>
