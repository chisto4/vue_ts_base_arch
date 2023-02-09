<template>
  <main>
    <h1>U L B I</h1>
    <div>Hello</div>
    <div>
      Like's tody: <strong>{{ likes }}</strong>
    </div>
    <div>
      Dislike's today: <strong>{{ dislikes }}</strong>
    </div>
    <div class="button_wrapper">
      <button @click="addLike">LIKE</button>
      <button @click="addDislike">DISLIKE</button>
    </div>
  </main>
</template>

<script>
import { colors } from '@/assets/const/ColorsTheme';
export default {
  data() {
    const localLikes = localStorage.getItem('likes');
    const localDislikes = localStorage.getItem('dislikes');
    return {
      likes: localLikes ? Number(localLikes) : 2,
      dislikes: localDislikes ? Number(localDislikes) : 1,
    };
  },
  methods: {
    addToLocalStorage() {
      localStorage.setItem('likes', this.likes);
      localStorage.setItem('dislikes', this.dislikes);
    },
    addLike() {
      this.likes += 1;
      this.addToLocalStorage();
    },
    addDislike() {
      this.dislikes += 1;
      this.addToLocalStorage();
    },
  },
};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.button_wrapper {
  margin: 16px;
  display: flex;
}

.button_wrapper button {
  width: 140px;
  padding: 16px 0px 16px 0px;
  margin: 8px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 8px;
  color: rgba(235, 235, 235, 0.64);
  background-color: #181818;
  border: 1px solid hsla(160, 100%, 37%, 1);
  cursor: pointer;
  transition: 0.3s;
}

.button_wrapper button:hover {
  background-color: #292727;
  transform: scale(101%);
}

.button_wrapper button:active {
  transform: scale(99%);
  background-color: rgb(12, 87, 62);
  border-color: #181818;
  color: #181818;
}

@media (min-width: 1024px) {}
</style>
