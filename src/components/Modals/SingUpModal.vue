<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    handleChangeLoginRegisterForm() {
      this.changeModal = !this.changeModal;
    },
    handleAuth() {
      localStorage.setItem('login', 'login');
      window.location.reload();
    }
  },
  data() {
    return {
      changeModal: false,
    };
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal_container">
        <p class="modal-default-button" @click="$emit('close')">╳</p>
        <h3 v-if="changeModal">Login</h3>
        <h3 v-if="!changeModal">Registration</h3>
        <form @submit.prevent v-if="changeModal">
          <label>First Name</label>
          <input placeholder="James" type="text" />

          <label>Last Name</label>
          <input placeholder="Bond" type="text" />

          <label>Email</label>
          <input placeholder="007@mail.ru" type="email" />

          <label>Password</label>
          <input placeholder="Password" type="password" />
          <input placeholder="Confirm password" type="password" />
          <input @click="handleAuth" class="button" type="submit" value="CRATE" />
        </form>

        <form @submit.prevent v-if="!changeModal">
          <label>Email</label>
          <input placeholder="007@mail.ru" type="email" />

          <label>Password</label>
          <input placeholder="Password" type="password" />
          <input @click="handleAuth" class="button" type="submit" value="LOGIN" />
        </form>

        <p
          v-if="changeModal"
          class="change_modal_button"
          @click="handleChangeLoginRegisterForm"
        >
          Login
        </p>
        <p
          v-if="!changeModal"
          class="change_modal_button"
          @click="handleChangeLoginRegisterForm"
        >
          Registration Now
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(37 37 37 / 80%);
  display: flex;
  transition: opacity 0.5s ease;
}

.modal_container {
  border-radius: 2vw;
  margin: auto;
  padding: 5vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
  background-color: #2a2f2c;
}
.modal_container h3 {
  font-size: 2vh;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-bottom: 3vh;
  letter-spacing: 0.5vh;
  text-transform: uppercase;
}

.modal-default-button {
  float: right;
  border: none;
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  top: 2vh;
  right: 2vh;
}

.change_modal_button {
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 100;
  width: 100%;
  text-align: center;
  margin-top: 2vw;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  width: 100%;
  font-size: 2vh;
  margin-bottom: 1vh;
  text-align: left;
}

input {
  width: 40vh;
  height: 4vh;
  border-radius: 4vw;
  border: none;
  padding-left: 2vh;
  margin-bottom: 2vh;
}

.button {
  background-color: rgba(19, 170, 120, 0.699);
  width: 60%;
  cursor: pointer;
  transition: 1s;
  font-size: 2vh;
  letter-spacing: 0.5vw;
  font-weight: 500;
  height: 5vh;
  margin-top: 3vh;
}

.button:hover {
  background-color: rgb(52, 136, 177);
  transform: scale(101%);
}

.button:active {
  background-color: rgb(40, 90, 115);
  color: white;
  transition: 0.3s;
  transform: scale(99%);
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
