import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: "6Lcw8IkpAAAAACZxyUMm-24Ig0EnDsIdi49fcrrf",
    loaderOptions: {
      autoHideBadge: false,
      explicitRenderParameters: {
        badge: "inline",
      },
    },
  });
});
