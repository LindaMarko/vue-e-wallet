<template>
  <section class="card-list">
    <ul>
      <Card
        v-for="card in saved"
        :key="card.vendor"
        :savedCard="card"
        :logo="logo"
        @active="$emit('active', savedCard.cardNumber)"
      />
    </ul>
  </section>
</template>

<script>
import Card from "./Card.vue"
export default {
  components: { Card },
  props: ["logo", "saved"],
}
</script>

<style scoped lang="scss">
.card-list {
  margin-top: 3rem;
}
</style>
