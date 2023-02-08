<script setup lang="ts">
</script>

<template>
  <main>
    <h1>AUTH PAGE</h1>
    <div>
      <form>
        <label>First Name</label>
        <input placeholder="James" type="text" />

        <label>Last Name</label>
        <input placeholder="Bond" type="text" />

        <label>Email</label>
        <input placeholder="007@mail.ru" type="email" />

        <label>Password</label>
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm password" type="password" />
        <input class="button" type="button" value="CRATE" />
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  background-color: rgb(127, 178, 203);
  width: 60%;
  cursor: pointer;
  transition: 1s;
  font-size: 2vh;
  letter-spacing: 0.5vw;
  font-weight: 500;
  height: 5vh;
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

@media (min-width: 1024px) {}
</style>
