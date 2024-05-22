<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-VJYFTT5DM5"
  ></Script>
  <Script>
    window.dataLayer = window.dataLayer || []; function gtag() {
    dataLayer.push(arguments); } gtag("js", new Date()); gtag("config",
    "G-VJYFTT5DM5");
  </Script>
</template>

<script setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
useSeoMeta({
  title: "Manilla Times Band",
  ogTitle: "Manilla Times Band",
  description:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
  ogDescription:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
});
</script>
