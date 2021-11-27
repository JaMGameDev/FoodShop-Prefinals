import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ItemDetails from "../views/ItemDetails.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/items/:itemID/:itemName",
    name: "Details",
    component: ItemDetails,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
