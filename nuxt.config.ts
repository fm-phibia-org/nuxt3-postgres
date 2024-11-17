import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: '',
    authDomain: '',
    databaseUrl: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  },

  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
  ],

  css: [
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
    "@/assets/css/tailwind.css"
  ],

  // devtools: { enabled: true }
  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: "2024-11-17"
})
