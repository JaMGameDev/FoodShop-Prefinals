<template>
  <div class="items-div">
    <div class="div-content-1">
      <h1 class="title-2">FOOD CART</h1>
      <h1 class="title">Items in Cart: {{ itemDetail.length }}</h1>
    </div>
    <div class="card-2" v-bind:key="index" v-for="(item, index) in itemDetail">
      <div>
        <img class="card-image-3" alt="logo" :src="item.img" />
      </div>
      <div class="div-details">
        <h1 class="title-1">{{ item.name }}</h1>
        <h1 class="subtitle-2">PHP {{ item.price }}</h1>
        <div class="div-quantity">
          <h1 class="qty-title">Quantity:</h1>
          <button class="qty-btn" @click="decr(index)">-</button>
          <input
            v-model="qty[index].qty"
            type="number"
            class="input-qty"
            min="1"
            :max="item.max"
            @input="check(item.max, index)"
            @blur="updateQty(item.max, index)"
          />
          <button class="qty-btn" @click="incr(index)">+</button>
        </div>
        <h1 class="title-3">
          Price: PHP {{ parseFloat(item.qty * item.price).toFixed(2) }}
        </h1>
        <button class="del-btn" @click="removeInCart(index)">DELETE</button>
      </div>
    </div>
    <div class="div-content-2" v-if="itemDetail.length > 0">
      <div class="div-chk">
        <h1>Coupon Code:</h1>
        <input
          class="input-code"
          type="text"
          v-model="coupon"
          placeholder="Enter Code"
          @input="getDiscount()"
        />
      </div>
      <h1 class="title-2">
        TOTAL PRICE: PHP {{ parseFloat(netTotal).toFixed(2) }}
      </h1>
      <div class="div-chk">
        <h1>Payment: PHP</h1>
        <input
          class="input-amt"
          type="number"
          v-model="money"
          placeholder="Enter Cash"
          @input="checkMoney()"
        />
      </div>
      <button class="chk-btn" @click="checkOut()">CHECK OUT</button>
    </div>
    <div class="div-empty" v-else-if="itemDetail.length == 0">
      <h1 class="title-2">CART IS EMPTY!</h1>
      <router-link :to="{ name: 'Home' }">
        <p class="clk-here">Click here to add items.</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      qty: this.$store.state.cart,
      money: "",
      coupon: "",
      discount: 0,
      flat: 0,
    };
  },
  computed: {
    itemDetail() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.total;
    },
    netTotal() {
      return this.total - this.discount - this.flat;
    },
  },
  methods: {
    check(max, ndx) {
      if (parseFloat(this.qty[ndx].qty) <= 0 || this.qty[ndx].qty == "") {
        this.$nextTick(() => {
          this.qty[ndx].qty = 1;
        });
      } else if (parseFloat(this.qty[ndx].qty) > max) {
        this.$nextTick(() => {
          this.qty[ndx].qty = max;
        });
      }
    },
    updateQty(max, ndx) {
      if (
        parseFloat(this.qty[ndx].qty) > 0 &&
        parseFloat(this.qty[ndx].qty) <= max
      ) {
        let input = this.qty[ndx];
        let data = { ndx, input };
        this.$store.commit("changeQty", data);
        this.qty = this.itemDetail;
      }
    },
    incr(ndx) {
      this.$store.commit("incrQty", ndx);
      this.getDiscount();
    },
    decr(ndx) {
      this.$store.commit("decrQty", ndx);
      this.getDiscount();
    },
    removeInCart(ndx) {
      this.$store.commit("removeInCart", ndx);
      this.getDiscount();
      this.qty = this.itemDetail;
    },
    getDiscount() {
      switch (this.coupon) {
        case "menu50":
          this.discount = this.total * 0.5;
          break;
        case "menu20":
          this.discount = this.total * 0.2;
          break;
        case "menu10":
          this.discount = this.total * 0.1;
          break;
        case "menu200flat":
          if (this.total >= 1000) {
            this.flat = 200;
          } else {
            this.flat = 0;
          }
          break;
        default:
          this.discount = 0;
          this.flat = 0;
          break;
      }
    },
    checkMoney() {
      if (parseFloat(this.money) < 0 || this.money == "") {
        this.$nextTick(() => {
          this.money = 0;
        });
      }
    },
    checkOut() {
      if (this.money >= this.netTotal) {
        this.$store.commit("checkOut");
        window.alert("Purchase Success!");
      } else {
        window.alert("Error: Payment Amount is Invalid!");
      }
    },
  },
};
</script>
