<template>
  <footer>
    <div class="footer-top">
      <img src="../assets/img/la-molisana-logo.png" alt="">
      <nav>
        <div>
          <h2>Pastificio</h2>
          <ul>
            <li>
              <a href="#">Link</a>

            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Pastificio</h2>
          <ul>
            <li>
              <a href="#">Link</a>

            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <img src="../assets/img/footer-montagne-bottom.jpg" alt="">

  </footer>
</template>

<script>
  export default {
    name: 'FooterComp'
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin.scss";

  .footer-top {
    @include center($tipologia: 'both');

    nav {
      @include center($tipologia: 'both');
    }
  }

  ul {
    li {
      list-style-type: none;

      a {
        text-decoration: none;
        color: black;
      }
    }

  }
</style>
