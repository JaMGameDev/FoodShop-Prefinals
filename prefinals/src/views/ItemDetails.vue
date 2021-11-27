<template>
  <div>
    <div class="items-div">
      <h1 class="title-2">Product Details</h1>
      <div class="card-1" v-bind:key="item.id" v-for="item in selectItem">
        <div>
          <img class="card-image-2" alt="logo" :src="item.img" />
        </div>
        <div class="div-details">
          <h1>Product Name: {{ item.name }}</h1>
          <h1>Product ID: {{ item.id }}</h1>
          <h1>Category: {{ item.category }}</h1>
          <h1>Price: PHP {{ parseFloat(item.price).toFixed(2) }}</h1>
          <div class="div-quantity">
            <h1 class="qty-title">Quantity:</h1>
            <button class="qty-btn" @click="decr">-</button>
            <input
              type="number"
              class="input-qty"
              v-model="qty"
              min="1"
              :max="item.quantity"
              @input="check"
            />
            <button class="qty-btn" @click="incr">+</button>
            <h1 class="avail">{{ item.quantity }} pieces available</h1>
          </div>
          <p class="description">{{ item.description }}</p>
          <router-link
            :to="{ name: 'Cart' }"
            class="d-flex justify-center my-10 mb-5"
          >
            <button class="add-btn" @click="addItem(item, qty)">
              ADD TO CART
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/data.js";

export default {
  name: "Details",
  props: {
    itemID: String,
    itemName: String,
  },
  data() {
    return {
      items: data.products,
      qty: 1,
      newitem: {
        id: "",
        name: "",
        price: "",
        quantity: "",
        img: "",
        qty: "",
      },
    };
  },
  computed: {
    selectItem: function () {
      return this.items.filter((item) => {
        return item.id == this.itemID;
      });
    },
  },
  methods: {
    check() {
      if (parseFloat(this.qty) <= 0 || this.qty == "") {
        this.$nextTick(() => {
          this.qty = 1;
        });
      } else if (parseFloat(this.qty) > this.selectItem[0].quantity) {
        this.$nextTick(() => {
          this.qty = this.selectItem[0].quantity;
        });
      }
    },
    incr() {
      if (parseFloat(this.qty) < this.selectItem[0].quantity) {
        this.$nextTick(() => {
          this.qty += 1;
        });
      }
    },
    decr() {
      if (parseFloat(this.qty) > 1) {
        this.$nextTick(() => {
          this.qty -= 1;
        });
      }
    },
    addItem(item, q) {
      this.newitem.id = item.id;
      this.newitem.name = item.name;
      this.newitem.price = item.price;
      this.newitem.max = item.quantity;
      this.newitem.img = item.img;
      this.newitem.qty = q;
      this.$store.commit("addToCart", this.newitem);
    },
  },
};
</script>
