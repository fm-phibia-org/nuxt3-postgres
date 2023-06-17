<script setup lang="ts">
  import { useCounterStore } from "@/store/counter"
  import { storeToRefs } from "pinia"
  import { initializeApp } from "firebase/app"
  import { getAnalytics } from "firebase/analytics"

  const counterStore = useCounterStore()
  const { increment } = counterStore
  const { count } = storeToRefs(counterStore)

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
</script>

<template>
  <div>
    <h1>
      Count:{{ count }}
    </h1>
    <button
      @click="increment"
    >
      たすよ
    </button>
    <br />
    <nuxt-link
      to="/"
    >
      もどる
    </nuxt-link>
  </div>
  <div>
    <v-btn>
      aaaa
    </v-btn>
    <div
      class="
        text-3xl
        font-bold
        underline
        bg-gray-700
      "
    >
      トップ
    </div>
  </div>
</template>
