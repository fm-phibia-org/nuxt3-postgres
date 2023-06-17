import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
  ],
  css: [
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
    "@/assets/css/tailwind.css"
  ],
  build: {
    transpile: ['vuetify'],
  }
  // devtools: { enabled: true }
})
