<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
    <div class="message">
      <h1 class="green">{{ msg }}</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/ulbi">Ulbi</RouterLink>
    </nav>
    <div>
      <button v-if="loginStatus" @click="clearLocal">LOG OUT</button>
      <button v-if="!loginStatus" @click="showModal = true">LOG IN</button>
    </div>
  </header>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false"/>
  </Teleport>
</template>

<script>
import router from '@/router';
import { RouterLink, RouterView } from 'vue-router';
import Modal from './Modals/SingUpModal.vue';
export default {
  props: {
    msg: String,
  },
  components: {
    Modal,
  },
  methods: {
    clearLocal() {
      localStorage.clear();
      router.push({ path: '/', replace: true });
    },
  },
  data() {
    const localLoginStatus = localStorage.getItem('login');
    return {
      loginStatus: localLoginStatus ? localLoginStatus : false,
      showModal: false,
    };
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  line-height: 1.5;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0vh 3vh;
}

header button {
  cursor: pointer;
  background-color: #181818;
  width: 7vw;
  padding: 1vh;
  border: none;
  border-radius: 3vw;
  color: hsla(160, 10%, 37%, 1);
  font-size: 1.5vh;
  transition: 0.6s;
}

header button:hover {
  transform: scale(103%);
  color: hsla(160, 100%, 37%, 1);
}

header button:active {
  transform: scale(98%);
  color: hsla(160, 80%, 37%, 1);
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
