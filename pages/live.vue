<template>
  <section class="page-container">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script setup>
useSeoMeta({
  title: "Live Dates",
  ogTitle: "Live Dates - Manilla Times",
});
const story = await useAsyncStoryblok("live", { version: "draft" });
</script>

<style scoped lang="scss">
.page-container {
  margin: 24px 0px 36px 0px;
}
</style>
