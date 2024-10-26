export default defineNuxtConfig({
  title: "travel-agency-booking",

  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "" },
    { name: "format-detection", content: "telephone=no" },
  ],

  htmlAttrs: {
    lang: "English",
  },

  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    // strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json"
      },
      {
        code: "ar",
        name: "Arabic",
        file: "ar.json",
      },
    ],
    defaultLocale: "English", 
  },

  primevue: {
    cssLayerOrder: "reset,primevue",
    options: {
      ripple: true
    }
  },
  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "primeicons/primeicons.css",
    '@/assets/scss/style.css',
  ],
});
