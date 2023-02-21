<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar msg="Yeep!" />
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
