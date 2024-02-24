// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  title: 'travel-agency-booking',
  
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
  ],

  htmlAttrs: {
    lang: 'en'
  },
 

  devtools: { enabled: true },
  modules: ["nuxt-primevue"],

  primevue: {
    cssLayerOrder: "reset,primevue",
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css", 'primeicons/primeicons.css'],
});
