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
      activeCard: {
        vendor: "Bitcoin Inc",
        cardNumber: "1234 5678 9123 4567",
        cardholder: "Marty McFly",
        expireMonth: "09",
        expireYear: "22",
      },
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
      console.log(this.savedCards)
      persist(this.savedCards)
    },
    deleteCard() {
      this.savedCards = this.savedCards.filter(
        (card) => card.cardNumber != this.activeCard.cardNumber
      )
      persist(this.savedCards)
      this.activeCard = {}
      console.log(this.savedCards)
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
  background-color: lightblue;
  text-transform: uppercase;
}
h1,
h2,
h3 {
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  width: 24rem;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 2rem;
}
</style>
