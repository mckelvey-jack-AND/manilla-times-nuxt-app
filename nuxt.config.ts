// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/base.css"],
  ssr: true,
  modules: [
    ["@storyblok/nuxt", { accessToken: "CcZSZxUrJQ7JRTs5NjxenQtt" }],
    "@nuxtjs/sitemap",
    "nuxt-gtag",
    "nuxt-jsonld",
    "@nuxtjs/robots",
  ],
  gtag: {
    id: "G-VJYFTT5DM5",
  },
});
