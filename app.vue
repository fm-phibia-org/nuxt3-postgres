<script setup lang="ts">
  import { useCounterStore } from "@/store/counter"
  import { storeToRefs } from "pinia"

  const counterStore = useCounterStore()
  const { increment } = counterStore
  const { count } = storeToRefs(counterStore)

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
