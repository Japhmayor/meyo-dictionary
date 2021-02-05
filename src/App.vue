<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import NavBar from "./components/navbar";
// import MainPage from "./components/main";

export default {
  name: "App",
  components: {
    // MainPage,
    // NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
