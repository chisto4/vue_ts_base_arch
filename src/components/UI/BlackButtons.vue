<template>
      <button><slot></slot></button>
</template>

<style scoped>
button {
  min-width: 100px;
  padding: 12px;
  margin: 8px;
  font-size: 1.4vh;
  font-weight: 400;
  border-radius: 2vh;
  color: rgba(235, 235, 235, 0.64);
  background-color: #181818;
  border: none;
  box-shadow: 2px -1px 12px 1px #4f4c4c87;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 0.4vh;
}

button:hover {
  background-color: #292727;
  transform: scale(101%);
}

button:active {
  transform: scale(99%);
  background-color: rgb(12, 87, 62);
  border-color: #181818;
  color: #181818;
}

@media (min-width: 1024px) {
}
</style>
