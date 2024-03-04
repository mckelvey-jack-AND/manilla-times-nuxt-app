<template>
  <NavBar />
  <section class="error-container">
    <iframe
      src="https://giphy.com/embed/FYUnDtud95kMKCovAY"
      width="300"
      height="300"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </section>
  <FooterComponent />
</template>

<style lang="scss" scoped>
.error-container {
  margin-top: 40px;
  width: 100%;
  text-align: center;
  .error-text {
    font-size: 2rem;
  }
  iframe {
    margin-top: 24px;
    border-radius: 24px;
  }
}
</style>
