<template>
  
  <div v-for="post in PostsArr" class="post_wrapper" :key="post.id">
    <div class="post_item_wrapper">
      <div class="post_header">{{ post.header }}</div>
      <div class="post_description">{{ post.description }}</div>
    </div>
      <LikesModule />
      <h6 @click="$emit('remove', post)">Delete</h6>
  </div>
</template>

<script>
import LikesModule from './LikesModule.vue';
export default {
  props: {
    PostsArr: {
      type: Array[
        {
          id: String | Number,
          header: String,
          description: String
        }
      ],
    } 
  },
  methods: {
    deletePost() {
    },
    rerender() {
      this.$forceUpdate();
    },

  },
  components: {LikesModule}
};
</script>

<style>
@media (min-width: 1024px) {

  .post_wrapper {
  margin: 16px;
  display: flex;
  border-radius: 2vh;
  padding: 16px;
  box-shadow: 2px -1px 12px 1px #4f4c4c87;
  width: 70vw;
  align-items: center;
  position: relative;
}
  .post_wrapper h6 {
  font-size: 1.2vh;
  position: absolute;
  top: 1.5vh;
  right: 1.5vh;
  letter-spacing: 0.3vh;
  text-transform: uppercase;
  cursor: pointer;
  transition: 1s;
}
  .post_wrapper h6:hover {
  color: red
}

.post_wrapper:last-child {
    margin-bottom: 32px;
  }

  .post_item_wrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
  }

  .post_header {
    font-size: 3vh;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.6vh;
  }

  .post_description {
    font-size: 1.8vh;
    font-weight: 300;
    letter-spacing: 0.6vh;
    word-break: break-word;
  }
}
</style>
