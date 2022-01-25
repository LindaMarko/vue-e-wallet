<template>
  <main id="home">
    <h1>E-wallet</h1>
    <p>Active card</p>
    <Card
      :vendorName="active.vendor"
      :cardNumber="active.cardNumber"
      :cardholder="active.cardholder"
      :expireMonth="active.expireMonth"
      :expireYear="active.expireYear"
    />
    <p v-if="saved.length > 0" class="active-text">
      👇 Click on a card to make it active.
    </p>
    <p v-if="this.saved.length > 0" class="all-cards">All cards</p>
    <CardList :saved="saved" @active="activeCard" />

    <button @click="$emit('changeView')">Add new card</button>
    <button @click="showDialog = true" class="delete-btn">
      Delete active card
    </button>
    <DeleteCardDialog
      v-if="showDialog"
      @close="showDialog = false"
      @delete="$emit('delete')"
    />
  </main>
</template>

<script>
import Card from "../components/Card"
import CardList from "../components/CardList"
import DeleteCardDialog from "../components/DeleteCardDialog"

export default {
  components: {
    Card,
    CardList,
    DeleteCardDialog,
  },
  props: ["saved", "active"],
  data() {
    return {
      showDialog: false,
      activeCardData: {},
    }
  },
  methods: {
    activeCard(card) {
      this.activeCardData = card
      this.$emit("active", this.activeCardData)
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
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    font-family: inherit;
    text-transform: uppercase;
    border: 2px solid black;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
  }
  .all-cards {
    margin-top: 2rem;
  }
  .active-text {
    font-size: 0.6rem;
  }
  .delete-btn {
    background-color: #222;
    color: white;
  }
}
</style>
