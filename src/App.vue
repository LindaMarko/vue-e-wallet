<template>
  <div id="app">
    <Home
      v-if="currentView === 'home'"
      :saved="savedCards"
      :active="activeCard"
      @changeView="changeToAddCard"
      @active="activateCard"
      @delete="deleteCard"
    />
    <AddCard
      v-else-if="currentView === 'add-card'"
      :saved="savedCards"
      @send="addNewCard"
      @back="changeToHome"
    />
  </div>
</template>

<script>
import Home from "./views/Home"
import AddCard from "./views/AddCard"

function persist(data) {
  localStorage.setItem("currentCards", JSON.stringify(data))
}
export default {
  name: "App",
  components: {
    Home,
    AddCard,
  },
  data() {
    return {
      currentView: "home",
      savedCards: [],
      activeCard: {},
    }
  },
  created() {
    let persistedData = localStorage.getItem("currentCards")
    if (persistedData) {
      this.savedCards = JSON.parse(persistedData)
    }
  },
  methods: {
    addNewCard(card) {
      this.savedCards.push(card)
      this.currentView = "home"
      persist(this.savedCards)
    },
    deleteCard() {
      this.savedCards = this.savedCards.filter(
        (card) => card.cardNumber != this.activeCard.cardNumber
      )
      persist(this.savedCards)
      localStorage.removeItem(this.activeCard)
      this.activeCard = {}
    },
    changeToAddCard() {
      this.currentView = "add-card"
    },
    changeToHome() {
      this.currentView = "home"
    },
    activateCard(card) {
      this.activeCard = card
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
  background-color: rgb(8, 8, 8);
  text-transform: uppercase;
}
h1,
h2,
h3 {
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  width: 24rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
}
@media (max-width: 400px) {
  #app {
    width: 21.5rem;
  }
}
</style>
