<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok("home", { version: "draft" });
useSeoMeta({
  title: "Manilla Times",
  ogTitle: "Manilla Times",
  ogImage: "https://www.manillatimesband.com/MT_logo_white_logo.png",
  ogType: "website",
  description:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
  ogDescription:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
});
</script>
