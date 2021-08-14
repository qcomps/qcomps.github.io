<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`index.json`);
    const response = await res.json();

    return response;
  }
</script>

<script>
  import Posts from '../components/Posts.svelte';

  export let posts;
</script>

<style lang="scss">
  h1 {
    font-weight: bold;
    font-size: 54px;
    padding-bottom: 25px;
    text-align: center;
  }
</style>

<svelte:head>
  <title>Quentin Compson Blog</title>
</svelte:head>

<div class="hero-section">
  <h1>Quentin Compson's Blog</h1>
  <p></p>
</div>

<Posts {posts} />
