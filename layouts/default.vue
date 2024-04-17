<template>
  <Head>
    <Title>Manilla Times Band</Title>
    <Meta
      name="description"
      content="Hailing from small idyllic towns in North Wales (Mold) and Ireland (Derrylin) respectively, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems."
    />
    <Style type="text/css" children="body { background-color: green; }"></Style>
  </Head>
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
