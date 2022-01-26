<template>
  <main id="new-card">
    <h1>Add new card</h1>
    <p>New card</p>
    <CardForm @send="sendData" @back="$emit('back')" :saved="saved" />
  </main>
</template>

<script>
import CardForm from "../components/CardForm"
export default {
  components: { CardForm },
  props: ["saved"],
  data() {
    return {
      newCardData: {},
    }
  },
  methods: {
    sendData(cardData) {
      this.newCardData = cardData
      this.$emit("send", this.newCardData)
    },
  },
}
</script>

<style scoped lang="scss">
#new-card {
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
}
</style>
