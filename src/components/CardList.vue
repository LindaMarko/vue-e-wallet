<template>
  <section class="card-list">
    <ul>
      <Card
        v-for="card in saved"
        :key="card.cardNumber"
        :vendorName="card.vendor"
        :cardNumber="card.cardNumber"
        :cardholder="card.cardholder"
        :expireMonth="card.expireMonth"
        :expireYear="card.expireYear"
        :layerIndex="saved.indexOf(card)"
        :margin="cardMargin"
        @active="$emit('active', card)"
      />
    </ul>
  </section>
</template>

<script>
import Card from "./Card.vue"
export default {
  components: { Card },
  props: ["saved"],
  data() {
    return {
      cardMargin: { marginTop: "-10rem" },
    }
  },
}
</script>

<style scoped lang="scss"></style>
