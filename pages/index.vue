<template>
  <Title>Manilla Times</Title>
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
</script>
