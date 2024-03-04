<template>
  <NavBar />
  <main>
    <NuxtPage />
  </main>
  <FooterComponent />
</template>
<script setup>
useHead({
  title: "Manilla Times",
  meta: [{ name: "description", content: "Manilla Times Offical Website" }],
});
</script>
