<template>
  <header>
    <nav>
      <RouterLink class="home-link" to="/"
        ><img src="../assets/MT-logo-black.png" class="logo" alt="logo"
      /></RouterLink>
      <div class="nav-links" :class="navOpen ? 'nav-open' : 'nav-closed'">
        <a target="_blank" href="https://manillatimesband.com/">
          <p class="nav-text">Shop</p>
        </a>
        <a
          target="_blank"
          href="https://www.songkick.com/artists/10191889-manilla-times"
        >
          <p class="nav-text">Live</p>
        </a>
      </div>
      <div class="nav-toggle">
        <button @click="navOpen = !navOpen">
          <img v-if="!navOpen" src="../assets/open.png" alt="open icon" />
          <img v-else="navOpen" src="../assets/close.png" alt="close icon" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
const navOpen = ref(false);
watch(navOpen, async () => {
  if (navOpen.value) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
});
</script>

<style scoped lang="scss">
nav {
  display: grid;
  grid-template-columns: auto 50px;
  align-items: center;
  padding: 24px 24px;
  .home-link {
    width: 120px;
    .logo {
      width: 100%;
    }
  }
  .nav-toggle {
    z-index: 3;
    text-align: center;
    img {
      width: 40px;
    }
  }
  .nav-links {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    .nav-text {
      font-size: 2rem;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      font-weight: bold;
      text-decoration: none;
      display: block;
      width: fit-content;
      margin: 46px 0px;
      &::after {
        content: "";
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
  .nav-open {
    transform: translateX(0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    transition: transform 0.5s ease-in-out;
  }
  .nav-closed {
    transform: translateX(-100%);
  }
}

@media screen and (min-width: 1024px) {
  nav {
    grid-template-columns: auto 200px;
    .nav-links {
      position: relative;
      height: auto;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      transition: none;
      .nav-text {
        color: black;
        font-size: 1rem;
      }
    }
    .nav-closed {
      transform: translateX(0);
    }
    .nav-open {
      background: white;
    }
    .nav-toggle {
      display: none;
    }
  }
}
</style>
