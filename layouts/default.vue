<template>
  <NavBar />
  <main>
    <slot />
  </main>
  <FooterComponent />
</template>
<script setup>
import NavBar from "~/components/NavBar.vue";
import FooterComponent from "~/components/FooterComponent.vue";
</script>
