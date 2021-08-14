<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  .container {
    max-width: 800px;
    margin: 50px auto;
    text-align: center;
  }
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 0 0 15px 0;
  }

  p {
    margin: 8px auto;
    font-style: italic;
    opacity: 0.5;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 56px;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container">
  <h1>{status}</h1>

  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
