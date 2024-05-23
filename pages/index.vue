<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok("home", { version: "draft" });
useSeoMeta({
  title: "Manilla Times Band",
  ogTitle: "Manilla Times Band",
  ogImage: "https://www.manillatimesband.com/MT_logo_white_logo.png",
  description:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
  ogDescription:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
});
</script>
