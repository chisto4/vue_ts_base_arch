<template>
  <div class="likes_wrapper">
    <div>
      Like's tody: <strong>{{ likes }}</strong>
    </div>
    <div>
      Dislike's today: <strong>{{ dislikes }}</strong>
    </div>
    <div class="button_wrapper">
      <BlackButtons @click="addLike">LIKE</BlackButtons>
      <BlackButtons @click="addDislike">DISLIKE</BlackButtons>
    </div>
  </div>
</template>

<script>
import BlackButtons from './UI/BlackButtons.vue';

export default {
    data() {
        const localLikes = localStorage.getItem("likes");
        const localDislikes = localStorage.getItem("dislikes");
        return {
            likes: localLikes ? Number(localLikes) : 2,
            dislikes: localDislikes ? Number(localDislikes) : 1,
        };
    },
    methods: {
        addToLocalStorage() {
            localStorage.setItem("likes", this.likes);
            localStorage.setItem("dislikes", this.dislikes);
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
    components: { BlackButtons }
};
</script>

<style scoped>
.likes_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 30%;
}
.button_wrapper {
  margin: 16px;
  display: flex;
}

@media (min-width: 1024px) {
}
</style>
