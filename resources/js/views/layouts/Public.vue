<template>
  <div id="app">
    <alerts></alerts>
      <navigation></navigation>
      <div class="col-md-12 text-center mini-bar"></div>
      <router-view></router-view>
      <footer></footer>
  </div>
</template>

<script>
import Alerts from "varie/Alerts";
import Footer from './components/Footer'
import Navigation from './components/Navigation'
export default {
  components: {
    Alerts,
    Footer,
    Navigation
  },
};
</script>
