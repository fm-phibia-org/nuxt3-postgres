import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_API_KEY,
      authDomain: process.env.NUXT_AUTH_DOMAIN,
      databaseUrl: process.env.NUXT_DATABASE_URL,
      projectId: process.env.NUXT_PROJECT_ID,
      storageBucket: process.env.NUXT_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_APP_ID,
      measurementId: process.env.NUXT_MEASUREMENT_ID,
    },
  },

  ssr: true,
  devtools: { enabled: true },

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
  },

  compatibilityDate: "2024-11-17"
})
