<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<style lang="scss">
  main {
    position: relative;
    width: 100%;
    max-width: 1200px;
    background-color: white;
    padding: 16px 32px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .container {
    padding: 16px 8px;
    position: relative;
  }
</style>

<main>
  <Nav {segment} />
  <div class="container">
    <slot />
  </div>
  <Footer />
</main>
