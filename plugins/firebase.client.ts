import { defineNuxtPlugin } from "#app"
import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: runtimeConfig.public.apiKey,
    authDomain: runtimeConfig.public.authDomain,
    projectId: runtimeConfig.public.projectId,
    storageBucket: runtimeConfig.public.storageBucket,
    messagingSenderId: runtimeConfig.public.messagingSenderId,
    appId: runtimeConfig.public.appId,
    measurementId: runtimeConfig.public.measurementId
  }
  initializeApp(firebaseConfig)
})
