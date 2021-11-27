<template>
  <div id="nav">
    <div class="beside">
      <img id="logo" alt="logo" src="./assets/food.png" />
      <router-link to="/">
        <h1>FOOD SHOP</h1>
      </router-link>
    </div>
    <router-link to="/cart">
      <h2>Cart</h2>
    </router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.commit("updateLocalStorage");
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #c2e0ff;
}

h1,
h2 {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  background-color: #1976d2;
}

#nav a {
  font-weight: bold;
  color: #dddfe0;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}

#logo {
  width: 40px;
  margin-right: 30px;
}

.beside {
  display: flex;
  flex-direction: row;
}

.items-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}

.input-search {
  width: 82%;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.input-qty {
  -moz-appearance: textfield;
  text-align: center;
  width: 50px;
  padding: 2px;
  font-size: 20px;
  border-radius: none;
}

.input-qty::-webkit-outer-spin-button,
.input-qty::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input-code {
  width: 80%;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.input-amt {
  width: 80%;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.cards {
  margin: 0 auto;
  max-width: 1600px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 50px;
  justify-items: center;
}

.card {
  background-color: #ffffff;
  width: 460px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.card-1 {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 1300px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  gap: 50px;
  margin-top: 40px;
}

.card-2 {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 1300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  gap: 75px;
  margin-top: 10px;
}

.card-image {
  width: 100%;
  height: 200px;
  display: block;
}

.card-image-2 {
  width: 700px;
  height: 450px;
  display: block;
}

.card-image-3 {
  width: 600px;
  height: 350px;
  display: block;
}

.card-content {
  line-height: 1.5;
  padding-top: 10px;
}

.div-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.div-content-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 70%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid #145aa0;
}

.div-content-2 {
  display: grid;
  align-items: center;
  text-align: left;
  width: 70%;
  margin: 50px 0;
  border-top: 3px solid #145aa0;
  border-bottom: 3px solid #145aa0;
}

.div-details {
  display: grid;
  text-align: left;
  gap: 20px;
}

.div-quantity {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.div-chk {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
}

.subtitle {
  color: rgb(156, 156, 156);
  font-size: 17px;
  font-weight: none;
}

.subtitle-2 {
  color: rgb(156, 156, 156);
  font-size: 25px;
  font-weight: none;
}

.title {
  font-size: 30px;
}

.title-1 {
  font-size: 45px;
}

.title-2 {
  font-size: 50px;
}

.title-3 {
  font-size: 35px;
  color: black;
}

.view-btn {
  padding: 15px;
  background-color: #b3e5fc;
  font-weight: bold;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.view-btn:hover {
  background-color: #a7d4e9;
}

.qty-btn {
  width: 50px;
  padding: 2px;
  font-size: 20px;
  border-radius: none;
}

.qty-title {
  margin-right: 30px;
}

.add-btn {
  width: 550px;
  padding: 15px;
  margin-top: 10px;
  background-color: #b3e5fc;
  font-size: 20px;
  font-weight: 500;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.add-btn:hover {
  background-color: #a7d4e9;
}

.del-btn {
  width: 350px;
  padding: 15px;
  margin-top: 30px;
  background-color: hsl(0, 100%, 64%);
  font-size: 20px;
  font-weight: 500;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.del-btn:hover {
  background-color: hsl(0, 100%, 72%);
}

.chk-btn {
  width: 100%;
  padding: 15px;
  margin: 10px 0 40px 0;
  background-color: #a2ffa7;
  font-size: 20px;
  font-weight: 500;
  border: 2px solid black;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.chk-btn:hover {
  background-color: #a7eeaa;
}

.div-empty {
  margin-top: 150px;
}

.clk-here {
  text-decoration: none;
  font-size: 20px;
  margin-top: 30px;
}

.avail {
  margin-left: 30px;
  color: rgb(156, 156, 156);
  font-size: 15px;
  font-weight: none;
}

.description {
  font-size: 20px;
}
</style>
