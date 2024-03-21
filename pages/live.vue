<template>
  <Script src="//widget-app.songkick.com/injector/10191889"></Script>
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-VJYFTT5DM5"
  ></Script>
  <Script>
    window.dataLayer = window.dataLayer || []; function gtag() {
    dataLayer.push(arguments); } gtag("js", new Date()); gtag("config",
    "G-VJYFTT5DM5");
  </Script>
  <section class="page-container">
    <StoryblokComponent v-if="story" :blok="story.content" />
    <a
      href="https://www.songkick.com/artists/10191889"
      class="songkick-widget"
      data-theme="light"
      data-track-button="on"
      data-detect-style="on"
      data-locale="en"
      data-other-artists="on"
      data-share-button="on"
      data-country-filter="on"
      data-rsvp="on"
      data-request-show="on"
      data-past-events="off"
      data-past-events-offtour="off"
      data-remind-me="off"
      style="display: none"
      >Live Dates</a
    >
  </section>
</template>

<script setup>
const story = await useAsyncStoryblok("live", { version: "draft" });
</script>

<style scoped lang="scss">
.page-container {
  margin: 24px 0px 36px 0px;
}
</style>
