<template>
  <main id="home">
    <h1>E-wallet</h1>
    <p>Active card</p>
    <Card v-if="activeCard" />
    <CardList :saved="savedCards" @active="activateCard" />
    <button @click="$emit('changeView')">Add new card</button>
  </main>
</template>

<script>
import Card from "../components/Card"
import CardList from "../components/CardList"

export default {
  components: {
    Card,
    CardList,
  },
  // props: ["view"],
  data() {
    return {
      activeCard: {
        vendor: "Bitcoin Inc",
        cardNumber: "1234 5678 9123 4567",
        cardholder: "Marty McFly",
        expireMonth: "09",
        expireYear: "22",
      },
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
    activateCard(cardNumber) {
      this.activeCard = this.savedCards.filter(
        (card) => card.cardNumber === cardNumber
      )
      console.log(this.activeCard)
    },
  },
}
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 1.8rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  button {
    width: 100%;
    padding: 1rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    font-family: inherit;
    text-transform: uppercase;
    border: 2px solid black;
    border-radius: 8px;
    background-color: white;
  }
}
</style>
