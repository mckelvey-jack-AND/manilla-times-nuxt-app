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
  description: "Welsh/Irish Indie Rock Band",
  ogDescription: "Welsh/Irish Indie Rock Band",
});

useJsonld({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": "https://musicbrainz.org/artist/de09231d-eba3-49e4-b75e-8a52931ece11",
  name: "Manilla Times",
  description: "Welsh/Irish Indie Rock Band",
  logo: {
    "@type": "ImageObject",
    url: "https://www.manillatimesband.com/MT_logo_white_logo.png",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.manillatimesband.com/MT-hero.jpg",
  },
  track: [
    {
      "@type": "MusicRecording",
      name: "Third Time Lucky",
      url: "https://open.spotify.com/track/49HgyKaneQrj1YeJp6OvUC?si=21b8f460159640b7",
      image: "http://www.manillatimes.com/third-time-lucky.png",
      datePublished: "2023-07-20",
      duration: "PT3M06S",
    },
    {
      "@type": "MusicRecording",
      name: "Miracle Worker",
      url: "https://open.spotify.com/track/00vxSiF0HPPZcCTptA7khn?si=177795e76b7546ed",
      image: "http://www.manillatimes.com/miracle-worker.png",
      datePublished: "2023-10-20",
      duration: "PT3M23S",
    },
  ],
  url: "https://www.manillatimesband.com/MT_logo_white_logo.png",
  genre: "Indie Rock",
  sameAs: [
    "https://www.instagram.com/manillatimes/",
    "https://www.facebook.com/manillatimesband/",
    "https://x.com/ManillaTimes",
    "https://www.youtube.com/user/username",
  ],
});
</script>
