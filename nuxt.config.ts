// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/base.css"],
  ssr: false,
  modules: [
    ["@storyblok/nuxt", { accessToken: "CcZSZxUrJQ7JRTs5NjxenQtt" }],
    "@nuxtjs/sitemap",
  ],
  runtimeConfig: {
    public: {
      gtagId: "GTM-PMZH2BGG",
    },
  },
});
