// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/base.css"],
  plugins: ["~/plugins/ga.js"],
  ssr: true,
  modules: [
    ["@storyblok/nuxt", { accessToken: "CcZSZxUrJQ7JRTs5NjxenQtt" }],
    "@nuxtjs/sitemap",
  ],
  runtimeConfig: {
    public: {
      gtagId: "GTM-PMZH2BGG",
    },
  },
  app: {
    head: {
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID`,
          async: true,
        },
        {
          hid: "gtag-init",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_MEASUREMENT_ID', { send_page_view: false });
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "gtag-init": ["innerHTML"],
      },
    },
  },
});
