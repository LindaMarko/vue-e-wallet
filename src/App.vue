<template>
  <div id="app">
    <Home v-if="currentView === 'home'" />
    <AddCard v-else-if="currentView === 'add-card'" />
  </div>
</template>

<script>
import Home from "./views/Home"
import AddCard from "./views/AddCard"

export default {
  name: "App",
  components: {
    Home,
    AddCard,
  },
  data() {
    return {
      currentView: "home",
    }
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
  font-family: "PT Mono", monospace;
  font-size: 16px;
}
h1,
h2,
h3 {
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
