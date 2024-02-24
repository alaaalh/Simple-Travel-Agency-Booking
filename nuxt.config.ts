// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: "travel-agency-booking",

  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "" },
    { name: "format-detection", content: "telephone=no" },
  ],

  htmlAttrs: {
    lang: "ar",
  },

  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "ar",
        name: "Arabic",
        file: "ar.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        flag: '/flags/flag-en.png'
      }
      
    ],
    defaultLocal: "ar",
    i18n: {
      locales: ["ar", "en"],
      defaultLocale: "ar",
    },
  },

  primevue: {
    cssLayerOrder: "reset,primevue",
  },
  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "primeicons/primeicons.css",
  ],
});
