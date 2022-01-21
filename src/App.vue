<template>
  <div id="app">
    <Home
      v-if="currentView === 'home'"
      :saved="savedCards"
      @changeView="changeToAddCard"
    />
    <AddCard v-else-if="currentView === 'add-card'" @send="addNewCard" />
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
      savedCards: [
        {
          vendor: "Bitcoin Inc",
          cardNumber: "1234 5678 9123 4567",
          cardholder: "Marty McFly",
          expireMonth: "09",
          expireYear: "22",
        },
        {
          vendor: "Ninja Bank",
          cardNumber: "1266 8867 8999 2355",
          cardholder: "Emmet Brown",
          expireMonth: "06",
          expireYear: "23",
        },
        {
          vendor: "Block Chain Inc",
          cardNumber: "7654 5668 9193 2367",
          cardholder: "Lorraine McFly",
          expireMonth: "11",
          expireYear: "24",
        },
      ],
    }
  },
  methods: {
    addNewCard(card) {
      this.savedCards.push(card)
      this.currentView = "home"
      console.log(this.savedCards)
    },
    changeToAddCard() {
      this.currentView = "add-card"
    },
    // changeToHome() {
    //   this.currentView = "home"
    // },
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
