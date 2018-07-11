<template lang="pug">
  doctype html
  main( role="main" )
    .container
      .row
        .col-md-12
          .hello
            | {{ msg }}
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: "Welcome to Your App",
    };
  }
};
</script>

<style lang="stylus">

</style>
