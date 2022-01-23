<template>
  <li
    class="card-container"
    :class="bgColor"
    :style="[{ zIndex: layerIndex }, getMargin]"
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
      src="../assets/evil.svg"
      alt="Vendor logo"
      class="vendor-logo"
    />
    <p v-else class="vendor-logo">Vendor logo</p>

    <div class="icons">
      <img src="../assets/wifi_white.svg" alt="Wifi logo" class="wifi" />
      <img src="../assets/chip.svg" alt="Chip" class="chip" />
    </div>
    <p class="card-number" v-if="cardNumber">{{ formatCardNumber }}</p>
    <p class="card-number" v-else>Card number</p>
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
  </li>
</template>

<script>
export default {
  props: [
    "vendorName",
    "cardNumber",
    "cardholder",
    "expireMonth",
    "expireYear",
    "layerIndex",
    "margin",
  ],
  computed: {
    bgColor() {
      if (this.vendorName === "Bitcoin Inc") {
        return "bg-bitcoin"
      } else if (this.vendorName === "Ninja Bank") {
        return "bg-ninja"
      } else if (this.vendorName === "Block Chain Inc") {
        return "bg-blockchain"
      } else if (this.vendorName === "Evil Corp") {
        return "bg-evil"
      } else {
        return "bg-grey"
      }
    },
    getMargin() {
      return this.layerIndex === 0 ? 0 : this.margin
    },
    formatCardNumber() {
      let formattedNum = ""
      if (this.cardNumber) {
        for (let i = 0; i < this.cardNumber.length; i++) {
          if (i % 4 === 0) {
            formattedNum = formattedNum + " " + this.cardNumber[i]
          } else {
            formattedNum += this.cardNumber[i]
          }
        }
      }

      return formattedNum
    },
  },
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 370px;
  height: 240px;
  padding: 0.5rem 1rem;
  background: #d0d0d0;
  box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.94);
  border-radius: 8px;
  margin-bottom: 1rem;

  .vendor-logo {
    width: 55px;
    height: 55px;
    align-self: flex-end;
  }
  .icons {
    display: flex;
    flex-direction: column;
    transform: translateY(-1.2rem);

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
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;

    p:first-child {
      font-size: 12px;
    }
  }
}
.bg-bitcoin {
  background-color: #ffae34;
}
.bg-ninja {
  background-color: #222;
  color: white;
}
.bg-blockchain {
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
</style>
