<script>
  export let segment;
</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .logo {
    max-height: 100px;
  }

  ul {
    margin: 0;
    padding: 0;

    /* clearfix */
    &::after {
      content: '';
      display: block;
      clear: both;
    }

    li {
      display: block;
      float: left;
    }
  }

  .selected {
    position: relative;
    display: inline-block;

    &::after {
      position: absolute;
      content: '';
      width: calc(100% - 1em);
      height: 2px;
      background-color: rgb(255, 62, 0);
      display: block;
      bottom: -1px;
    }
  }

  a {
    text-decoration: none;
    padding: 10px 5px;
    display: block;
  }
</style>

<nav>
  <a href="." class="logo">
    <img class="logo" src="redtie.png" alt="text"/>
  </a>
  <ul>
    <!-- <li><a class:selected={segment === undefined} href=".">home</a></li> -->
    <li>
      <a class:selected={segment === 'about'} href="about">About</a>
    </li>
    <li>
      <a class:selected={segment === 'contact'} href="contact">Contact</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li> -->
  </ul>
</nav>
