import { defineNuxtPlugin } from "#app"
import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  useState('firebaseApp', () => {
    const runtimeConfig = useRuntimeConfig()
    const firebaseConfig = {
      apiKey: runtimeConfig.apiKey,
      authDomain: runtimeConfig.authDomain,
      projectId: runtimeConfig.projectId,
      storageBucket: runtimeConfig.storageBucket,
      messagingSenderId: runtimeConfig.messagingSenderId,
      appId: runtimeConfig.appId,
      measurementId: runtimeConfig.measurementId
    }
    return initializeApp(firebaseConfig)
  })
})