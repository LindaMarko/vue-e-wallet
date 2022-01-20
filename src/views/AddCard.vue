<template>
  <main id="new-card">
    <h1>Add new card</h1>
    <p>New card</p>
  </main>
</template>

<script>
export default {
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
