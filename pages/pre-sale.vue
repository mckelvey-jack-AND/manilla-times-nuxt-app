<template>
  <section class="page-container">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script setup>
const story = await useAsyncStoryblok("pre-sale", { version: "draft" });
</script>

<style scoped lang="scss">
.page-container {
  padding: 0px 24px;
}
</style>
