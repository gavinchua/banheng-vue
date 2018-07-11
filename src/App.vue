<template lang="pug">
  doctype html
  #app
    Header
    router-view
    footer
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="stylus">

</style>
