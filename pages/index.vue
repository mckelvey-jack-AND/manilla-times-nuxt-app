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

const jsonld = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Manilla Times",
  url: "https://www.manillatimesband.com",
  image: "https://www.manillatimesband.com/MT_logo_white_logo.png",
  genre: "Indie Rock",
  track: [
    {
      "@type": "MusicRecording",
      name: "Third Time Lucky",
      url: "https://open.spotify.com/track/49HgyKaneQrj1YeJp6OvUC?si=62a97b96b9b24208",
      duration: "PT3M6S",
    },
  ],
  description:
    "Hailing from small idyllic towns in North Wales and Ireland, Manilla Times are an emerging modern indie rock band, known for their energetic live set, and catchy indie anthems.",
};
useHead({
  script: [
    {
      hid: "breadcrumbs-json-ld",
      type: "application/ld+json",
      textContent: JSON.stringify(jsonld),
    },
  ],
});
</script>
