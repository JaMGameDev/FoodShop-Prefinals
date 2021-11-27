<template>
  <div>
    <div class="items-div">
      <input
        class="input-search"
        type="text"
        v-model="search"
        placeholder="Food Search"
      />
    </div>
    <div class="cards">
      <div class="card" v-bind:key="item.id" v-for="item in filteredSearch">
        <img class="card-image" alt="logo" :src="item.img" />
        <div class="card-content">
          <div class="div-content">
            <div>
              <h1>{{ item.name }}</h1>
              <h1 class="subtitle">PHP {{ item.price }}</h1>
            </div>
            <router-link
              :to="{
                name: 'Details',
                params: { itemName: item.name, itemID: item.id },
              }"
            >
              <button class="view-btn">VIEW PRODUCT</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/data.js";

export default {
  name: "Items",
  data() {
    return {
      search: "",
      items: data.products,
    };
  },
  computed: {
    filteredSearch: function () {
      return this.items.filter((item) => {
        if (item.quantity != 0) {
          var name = item.name + " " + item.category;
          var input = this.search.toLowerCase();
          return name.toLowerCase().match(input);
        }
      });
    },
  },
};
</script>
