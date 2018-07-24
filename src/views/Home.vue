<template lang="pug">
  doctype html
  main( role="main" )
    .container
      .row
        .col-md-12
          nav
            ul
              li
                b-link( to="/HabourFront" )
                  | @HabourFront
      .row
        .col-md-12
          h4
            | Promotions
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="stylus">

</style>
