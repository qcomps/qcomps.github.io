<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { default as readingTimeCalculator } from 'reading-time';
  export let post;

  $: readingTimeData = readingTimeCalculator(post.contentHtml);
  $: readingTime = `${Math.ceil(readingTimeData.minutes)} minute${
    Math.ceil(readingTimeData.minutes) > 1 ? '(s)' : ''
  } read`;
</script>

<style lang="scss">
  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 600;
    margin-top: 20px;
    text-align: center;
  }

  .post-meta {
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: 2px;
    text-align: center;
  }

  .content {
    padding-top: 25px;
    :global(h2) {
      font-size: 32px;
      font-weight: 500;
    }

    :global(pre) {
      background-color: #f9f9f9;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
      padding: 12px;
      border-radius: 2px;
      overflow-x: auto;
      :global(code) {
        background-color: transparent;
        padding: 0;
      }
    }

    :global(ul) {
      line-height: 1.5;
      :global(li) {
        margin: 0 0 8px 0;
      }
    }
  }
</style>

<svelte:head>
  <title>{post.frontmatter.title}</title>
</svelte:head>

<div class="container">
  <h1>{post.frontmatter.title}</h1>
  <p class="post-meta">
    {new Date(post.frontmatter.date).toDateString()} ﹒ {readingTime}
  </p>

  <div class="content">
    {@html post.contentHtml}
  </div>
</div>
