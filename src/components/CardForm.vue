<template>
  <section>
    <Card
      :vendorName="this.newCard.vendor"
      :cardNumber="this.newCard.cardNumber"
      :cardholder="this.newCard.cardholder"
      :expireMonth="this.newCard.expireMonth"
      :expireYear="this.newCard.expireYear"
    />
    <form @submit.prevent="sendData">
      <div class="input">
        <label for="card-number" placeholder="XXXX XXXX XXXX XXXX"
          >Card number</label
        >
        <input
          type="text"
          id="card-number"
          name="card-number"
          v-model="newCard.cardNumber"
          maxlength="16"
        />
      </div>
      <div class="input">
        <label for="cardholder">Cardholder name</label>
        <input
          type="text"
          id="cardholder"
          name="cardholder"
          v-model="newCard.cardholder"
          maxlength="22"
        />
      </div>
      <div class="date">
        <div class="month">
          <label for="month">Month</label>
          <select name="month" id="month" v-model="newCard.expireMonth">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="year">
          <label for="year">Year</label>
          <select name="year" id="year" v-model="newCard.expireYear">
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      <div class="input">
        <label for="vendor">Vendor</label>
        <select name="vendor" id="vendor" v-model.trim="newCard.vendor">
          <option value="Bitcoin Inc">Bitcoin Inc</option>
          <option value="Ninja Bank">Ninja Bank</option>
          <option value="Block Chain Inc">Block Chain Inc</option>
          <option value="Evil Corp">Evil Corp</option>
        </select>
      </div>
      <button>Add card</button>
    </form>
    <button class="back-btn" @click="$emit('back')">Back to cards</button>
  </section>
</template>

<script>
import Card from "./Card"
export default {
  components: { Card },
  data() {
    return {
      isCardNumberInvalid: false,
      cardData: {},
      newCard: {
        vendor: "",
        cardNumber: "",
        cardholder: "",
        expireMonth: "",
        expireYear: "",
      },
    }
  },
  methods: {
    sendData() {
      this.$emit("send", { ...this.newCard })
      console.log(this.newCard)
    },
    // validateCardNumber() {
    //   if()
    // }
  },
}
</script>

<style scoped lang="scss">
form {
  width: 21rem;

  input,
  select {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid black;
    outline: none;
  }
  label {
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  .date {
    display: flex;
    justify-content: space-between;
  }
  .month,
  .year {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  .month {
    margin-right: 1.5rem;
  }
  option {
    background-color: rgb(41, 40, 40);
    color: white;
  }
}
button {
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  text-transform: uppercase;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
}
.back-btn {
  background-color: #222;
  color: white;
}
</style>
