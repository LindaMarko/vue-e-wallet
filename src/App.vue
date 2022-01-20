<template>
  <div id="app">
    <Home v-if="currentView === 'home'" @changeView="changeToAddCard" />
    <AddCard v-else-if="currentView === 'add-card'" />
  </div>
</template>

<script>
import Home from "./views/Home"
import AddCard from "./views/AddCard"

export default {
  name: "App",
  components: {
    Home,
    AddCard,
  },
  data() {
    return {
      currentView: "home",

      vendorsList: [
        {
          name: "Bitcoin Inc",
          icon: require("./assets/bitcoin.svg"),
          color: "#FFAE34",
        },
        {
          name: "Ninja Bank",
          icon: require("./assets/ninja.svg"),
          color: "#222",
        },
        {
          name: "Block Chain Inc",
          icon: require("./assets/blockchain.svg"),
          color: "#8B58F9",
        },
        {
          name: "Evil Corp",
          icon: require("./assets/evil.svg"),
          color: "#F33355",
        },
      ],
    }
  },
  methods: {
    changeToAddCard() {
      this.currentView = "add-card"
    },
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:wght@400;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  font-family: "PT Mono", monospace;
  font-size: 16px;
  background-color: lightblue;
  text-transform: uppercase;
}
h1,
h2,
h3 {
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  width: 25rem;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 2rem;
}
</style>
