<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
defineProps<{
  msg: string;
}>();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
    <div class="message">
      <h1 class="green">{{ msg }}</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  line-height: 1.5;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

nav {
  font-size: 16px;
  text-align: center;
  /* margin-top: 2rem; */
  margin-right: auto;
  margin-left: 32px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.message h1,
.message h3 {
  text-align: center;
}

.logo {
  margin-right: 32px;
}

@media (min-width: 1024px) {

  /* header {
    display: flex;
    align-items: center;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  .message h1,
  .message h3 {
    text-align: left;
  }
}
</style>
