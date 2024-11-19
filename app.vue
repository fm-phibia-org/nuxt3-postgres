<script setup lang="ts">
  import {
    executeQuery,
  } from 'firebase/data-connect'
  import { listMoviesRef, type ListMoviesData } from '@movie-app/movies'
  import { ref } from 'vue'

  const movies = ref<ListMoviesData>()
  const waiting = ref(true)

  const getData = () => {
    const ref = listMoviesRef();
    executeQuery(ref).then((data) => {
      console.log(data.data);
      movies.value = data.data;
    });
  }

  onMounted(() => {
    waiting.value = false
  })

</script>

<template>
  <div>
    <v-btn
      :disabled="waiting"
      color="success"
      class="m-2"
      :class="
        waiting ? 'hidden' : ''
      "
      @click="getData"
    >
      Get Data
    </v-btn>
    <div
      v-if="waiting"
    >
      Loading...
    </div>
    <v-card
      color="purple"
      class="m-6"
      v-for="movie in movies?.movies"
      :key="movie.id"
    >
      <v-chip
        class="m-2"
      >
        {{ movie.title }}
      </v-chip>
      <v-card-title>
        Title: {{ movie.title }}
      </v-card-title>
      <v-card-text>
        ID: {{ movie.id }}
      </v-card-text>
    </v-card>
  </div>
</template>
