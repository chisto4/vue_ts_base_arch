<template>
    <h4 @click="HandleChangeViewForm">Create New Post ˅</h4>
  <form v-if="viewForm" @submit.prevent>
    <input
      v-bind:value="header"
      @input="header = $event.target.value"
      class="text_input"
      id="head"
      placeholder="Header"
    />
    <textarea
      v-bind:value="description"
      @input="description = $event.target.value"
      id="desc"
      class="textarea_input"
      placeholder="Description"
      maxlength="110"
    />
    <BlackButtons @click="CreateNewPost" type="submit">CREATE</BlackButtons>
  </form>
</template>

<script>
import { PostsArr } from '@/assets/const/PostsArr';
import BlackButtons from './UI/BlackButtons.vue';
export default {
  data() {
    return {
      id: PostsArr.length + 1,
      header: '',
      description: '',
      viewForm: false,
    };
  },
  methods: {
    CreateNewPost() {
      const NewPost = {
        id: Date.now(),
        header: this.header,
        description: this.description,
      };
      if(this.header && this.description){
        this.$emit('create', NewPost)
      this.header = '';
      this.description = '';
      }
    },
    HandleChangeViewForm() {
      this.viewForm = !this.viewForm
    }
  },
  components: {BlackButtons}
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 2vh;
  font-weight: 500;
  letter-spacing: 1vh;
  cursor: pointer;
}
.text_input {
  width: 40vw;
  padding: 16px;
  margin: 8px;
  border: none;
  border-radius: 1vh;
  font-size: 2vh;
  line-height: 3vh;
  letter-spacing: 0.7vh;
  color: white;
  background-color: #181818;
  box-shadow: 2px -1px 12px 1px #4f4c4c87;
}
.textarea_input {
  width: 40vw;
  min-height: 15vh;
  padding: 8px;
  padding-left: 16px;
  margin: 8px;
  border: none;
  border-radius: 1vh;
  font-size: 1.5vh;
  line-height: 2vh;
  letter-spacing: 0.2vh;
  color: white;
  background-color: #181818;
  box-shadow: 2px -1px 12px 1px #4f4c4c87;

}
</style> 