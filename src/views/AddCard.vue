<template>
  <main id="new-card">
    <h1>Add new card</h1>
    <p>New card</p>
    <CardForm @send="$emit('send', newCard)" />
  </main>
</template>

<script>
import CardForm from "../components/CardForm"
export default {
  components: { CardForm },
  props: ["vendors"],
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
