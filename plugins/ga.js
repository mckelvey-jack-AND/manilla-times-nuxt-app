import { defineNuxtPlugin } from "#app";
import { useRouter } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  router.afterEach((to) => {
    if (process.client && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: to.fullPath,
      });
    }
  });
});
