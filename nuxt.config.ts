// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/base.css"],
  app: {
    head: {
      script: [{ src: "//widget-app.songkick.com/injector/10191889" }],
    },
  },
});
