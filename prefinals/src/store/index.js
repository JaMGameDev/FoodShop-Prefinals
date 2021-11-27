import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    total: (state) => {
      return state.cart.reduce((acc, val) => acc + val.qty * val.price, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push({ ...product });
      updateLocalStorage(state.cart);
    },
    removeInCart(state, ndx) {
      if (state.cart[ndx]) {
        state.cart = state.cart.filter((i) => state.cart.indexOf(i) !== ndx);
        updateLocalStorage(state.cart);
      }
    },
    incrQty(state, ndx) {
      if (state.cart[ndx]) {
        if (state.cart[ndx].qty < state.cart[ndx].max) {
          state.cart[ndx].qty++;
          updateLocalStorage(state.cart);
        }
      }
    },
    decrQty(state, ndx) {
      if (state.cart[ndx]) {
        if (state.cart[ndx].qty > 1) {
          state.cart[ndx].qty--;
          updateLocalStorage(state.cart);
        }
      }
    },
    changeQty(state, data) {
      const index = state.cart.findIndex((item) => item.id === data[0]);
      if (index !== -1) state.cart.splice(index, 1, data[1]);
      updateLocalStorage(state.cart);
    },
    checkOut(state) {
      state.cart = [];
      updateLocalStorage(state.cart);
    },
    updateLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {},
  modules: {},
});
