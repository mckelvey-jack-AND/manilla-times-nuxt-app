<template>
  <NavBar />
  <main>
    <div class="error-image-container">
      <img src="/assets/404.jpg" />
    </div>
  </main>
  <FooterComponent />
</template>
<script setup>
import NavBar from "~/components/NavBar.vue";
import FooterComponent from "~/components/FooterComponent.vue";
</script>

<style scoped>
h1 {
  margin-top: 24px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
}

.error-image-container {
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  max-width: 600px;
}
</style>
