<template>
  <main>
    <h1>FLOOD</h1>
    <AddPostForm @create="CreatePost" />
    <PostItem :PostsArr="PostsArr" @remove="RemovePost" />
  </main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import AddPostForm from '../components/AddPostForm.vue';
import { PostsArr } from '../assets/const/PostsArr';
export default {
  data() {
    return {
      PostsArr,
    };
  },
  methods: { 
    rerender() {
      this.$forceUpdate();
    }, 
    CreatePost(NewPost) {
        this.PostsArr.push(NewPost);
    },
    RemovePost(post) {
      console.log('post :>> ', post);
      this.PostsArr = this.PostsArr.filter( p => p.id !== post.id)
    }
  },
  components: { PostItem, AddPostForm },
};
</script>

<style scoped>
main {
  width: 100vw; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

@media (min-width: 1024px) {
}
</style>
