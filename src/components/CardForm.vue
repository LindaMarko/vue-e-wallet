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
        <label for="card-number">Card number<span class="star">*</span></label>
        <p v-if="isCardNumberInvalid" class="data-invalid">
          Card number contains only numbers.
        </p>
        <p v-if="isCardNumberDuplicate" class="data-invalid">
          This card number is already registered.
        </p>
        <input
          type="text"
          id="card-number"
          name="card-number"
          required
          v-model="newCard.cardNumber"
          @input="validateCardNumber"
          maxlength="16"
          minlength="16"
          inputmode="numeric"
        />
      </div>
      <div class="input">
        <label for="cardholder"
          >Cardholder name<span class="star">*</span></label
        >
        <p v-if="isCardholderInvalid" class="data-invalid">
          The cardholders name cannot contain numbers.
        </p>
        <input
          type="text"
          id="cardholder"
          name="cardholder"
          required
          v-model="newCard.cardholder"
          @input="validateCardholder"
          maxlength="22"
        />
      </div>
      <div class="date">
        <div class="month">
          <label for="month">Month<span class="star">*</span></label>
          <select
            name="month"
            id="month"
            required
            v-model="newCard.expireMonth"
          >
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
          <label for="year">Year<span class="star">*</span></label>
          <select name="year" id="year" required v-model="newCard.expireYear">
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      <div class="input">
        <label for="vendor">Vendor<span class="star">*</span></label>
        <select name="vendor" id="vendor" required v-model="newCard.vendor">
          <option value="bitcoin">Bitcoin Inc</option>
          <option value="ninja">Ninja Bank</option>
          <option value="blockchain">Block Chain Inc</option>
          <option value="evil">Evil Corp</option>
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
  props: ["saved"],
  data() {
    return {
      isCardNumberInvalid: false,
      isCardNumberDuplicate: false,
      isCardholderInvalid: false,
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
    },
    validateCardNumber() {
      if (this.newCard.cardNumber.length < 16) {
        this.isCardNumberDuplicate = false
      } else if (
        this.saved.find((card) => card.cardNumber === this.newCard.cardNumber)
      ) {
        this.isCardNumberDuplicate = true
      }
      const numbers = /^[0-9]+$/
      if (!this.newCard.cardNumber.match(numbers)) {
        this.isCardNumberInvalid = true
      }
      if (this.newCard.cardNumber === "") {
        this.isCardNumberInvalid = false
      }
    },
    validateCardholder() {
      const letters = /^[a-z][a-z\s]*$/
      if (!this.newCard.cardholder.match(letters)) {
        this.isCardholderInvalid = true
      }
      if (this.newCard.cardholder === "") {
        this.isCardholderInvalid = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
form {
  width: 20.5rem;
  max-width: 370px;
  margin-top: 1.5rem;

  input,
  select {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid black;
    outline: none;
  }
  input:focus,
  select:focus {
    border-width: 2px;
  }
  label {
    font-size: 0.6rem;
    margin-bottom: 0.5rem;

    .star {
      color: red;
    }
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
  .data-invalid {
    color: red;
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }
}
button {
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
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
