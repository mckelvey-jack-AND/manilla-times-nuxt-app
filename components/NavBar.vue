<template>
  <header>
    <nav>
      <RouterLink to="/"
        ><img src="../assets/MT_logo_black.png" alt="logo"
      /></RouterLink>
      <a href="https://manillatimesband.com/">
        <span class="nav-text">Shop</span>
      </a>
      <RouterLink to="/"><span class="nav-text">Live</span></RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  display: grid;
  grid-template-columns: auto repeat(2, 100px);
  align-items: center;
  width: 100%;
}
img {
  width: 120px;
}

.nav-text {
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-decoration: none;
  display: block;
  width: fit-content;
}

.nav-text::after {
  content: "";
  width: 0px;
  height: 2px;
  display: block;
  background: black;
  transition: 300ms;
}

.nav-text:hover::after {
  width: 100%;
}
</style>
