<template>
  <div>
    <div class="fade-layer" @click="cancelDelete"></div>
    <dialog open @click="cancelDelete">
      <h2>You are going to delete the active card. Are you sure?</h2>
      <button @click="$emit('delete')">Yes</button>
      <button class="cancel" @click="cancelDelete">Cancel</button>
    </dialog>
  </div>
</template>

<script>
export default {
  methods: {
    cancelDelete() {
      this.$emit("close")
    },
  },
}
</script>

<style scoped lang="scss">
.fade-layer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20vh;
  left: 38%;
  width: 22rem;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  margin: 0;
  overflow: hidden;
}
h2 {
  text-transform: none;
  text-align: center;
  margin-bottom: 1rem;
}
button {
  width: 90%;
  padding: 0.8rem;
  margin-top: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  text-transform: uppercase;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
}
.cancel {
  background-color: #222;
  color: white;
}
@media (max-width: 450px) {
  dialog {
    width: 16rem;
    left: 15%;
  }
}
@media (min-width: 450px) and (max-width: 767px) {
  dialog {
    width: 16rem;
    left: 25%;
  }
}
@media (min-width: 768px) and (max-width: 1190px) {
  dialog {
    left: 30%;
  }
}
</style>
