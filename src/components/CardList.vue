<template>
  <section class="card-list">
    <ul>
      <Card
        v-for="card in saved"
        :key="card.vendor"
        :vendorName="card.vendor"
        :cardNumber="card.cardNumber"
        :cardholder="card.cardholder"
        :expireMonth="card.expireMonth"
        :expireYear="card.expireYear"
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
}
</script>

<style scoped lang="scss">
.card-list {
  margin-top: 3rem;
}
</style>
