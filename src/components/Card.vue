<template>
  <div
    class="card-container"
    :class="bgColor"
    @click="$emit('activeCard', savedCard.cardNumber)"
  >
    <img
      v-if="savedCard.vendor === 'Bitcoin Inc'"
      src="../assets/bitcoin.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <img
      v-else-if="savedCard.vendor === 'Ninja Bank'"
      src="../assets/ninja.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <img
      v-else-if="savedCard.vendor === 'Block Chain Inc'"
      src="../assets/blockchain.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <img
      v-else-if="savedCard.vendor === 'Evil Corp'"
      src="../assets/blockchain.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />

    <div class="icons">
      <img src="../assets/wifi.svg" alt="Wifi logo" class="wifi" />
      <img src="../assets/chip.svg" alt="Chip" class="chip" />
    </div>
    <p class="card-number">{{ savedCard.cardNumber }}</p>
    <div class="info">
      <div class="name">
        <p>Cardholder name</p>
        <p>{{ savedCard.cardholder }}</p>
      </div>
      <div class="date">
        <p>Valid until</p>
        <p>{{ savedCard.expireMonth }} / {{ savedCard.expireYear }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["savedCard"],
  computed: {
    bgColor() {
      if (this.savedCard.vendor === "Bitcoin Inc") {
        return "bg-bitcoin"
      } else if (this.savedCard.vendor === "Ninja Bank") {
        return "bg-ninja"
      } else if (this.savedCard.vendor === "Block Chain Inc") {
        return "bg-block-chain"
      } else if (this.savedCard.vendor === "Evil Corp") {
        return "bg-evil"
      } else {
        return "bg-grey"
      }
    },
  },
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 240px;
  padding: 0.1rem 1rem;
  background: linear-gradient(
      248.3deg,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #d0d0d0;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1rem;
  .vendor-logo {
    width: 50px;
    height: 50px;
    align-self: flex-end;
  }
  .icons {
    display: flex;
    flex-direction: column;

    .wifi {
      width: 44px;
      height: 44px;
    }
    .chip {
      width: 50px;
      height: 40px;
    }
  }
  .card-number {
    font-size: 1.5rem;
    margin-top: 0.7rem;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;

    p:first-child {
      font-size: 12px;
    }
  }
  .bg-bitcoin {
    background-color: #ffae34;
  }
  .bg-ninja {
    background-color: #222;
    color: white;
  }
  .bg-block-chain {
    background-color: #8b58f9;
    color: white;
  }
  .bg-evil {
    background-color: #f33355;
    color: white;
  }
  .bg-grey {
    background-color: #d0d0d0;
  }
}
</style>
