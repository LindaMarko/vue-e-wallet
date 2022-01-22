<template>
  <div
    class="card-container"
    :style="{ background: bgColor }"
    @click="$emit('active')"
  >
    <img
      v-if="vendorName === 'Bitcoin Inc'"
      src="../assets/bitcoin.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <img
      v-else-if="vendorName === 'Ninja Bank'"
      src="../assets/ninja.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <img
      v-else-if="vendorName === 'Block Chain Inc'"
      src="../assets/blockchain.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <img
      v-else-if="vendorName === 'Evil Corp'"
      src="../assets/blockchain.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />

    <div class="icons">
      <img src="../assets/wifi.svg" alt="Wifi logo" class="wifi" />
      <img src="../assets/chip.svg" alt="Chip" class="chip" />
    </div>
    <p class="card-number">{{ cardNumber }}</p>
    <div class="info">
      <div class="name">
        <p>Cardholder name</p>
        <p>{{ cardholder }}</p>
      </div>
      <div class="date">
        <p>Valid until</p>
        <p>{{ expireMonth }} / {{ expireYear }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "vendorName",
    "cardNumber",
    "cardholder",
    "expireMonth",
    "expireYear",
  ],
  computed: {
    bgColor() {
      if (this.vendorName === "bitcoin inc") {
        return "bgbitcoin"
      } else if (this.vendorName === "ninja bank") {
        return "bgninja"
      } else if (this.vendorName === "Block Chain Inc") {
        return "bgblockchain"
      } else if (this.vendorName === "Evil Corp") {
        return "bgevil"
      } else {
        return "bggrey"
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
  .bgbitcoin {
    background-color: #ffae34;
  }
  .bgninja {
    background-color: #222;
    color: white;
  }
  .bgblockchain {
    background-color: #8b58f9;
    color: white;
  }
  .bgevil {
    background-color: #f33355;
    color: white;
  }
  .bggrey {
    background-color: #d0d0d0;
  }
}
</style>
