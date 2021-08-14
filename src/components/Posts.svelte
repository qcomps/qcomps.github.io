<script>
  export let posts;
</script>

<style lang="scss">
  .post {
    cursor: pointer;
    text-decoration: none;

    h2 {
      margin: 0;
      padding: 0 10px;
      font-size: 30px;
      font-weight: 600;
    }

    .description {
      padding: 10px 10px 25px 10px;
      opacity: 0.4;
    }
  }
</style>

<div class="posts">
  {#each posts as post}
    <a class="post" href="/blog/{post.slug}">
      <h2>{post.frontmatter.title}</h2>
      <div class="description">{post.frontmatter.excerpt}</div>
    </a>
  {/each}
</div>
