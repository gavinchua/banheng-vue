<template lang="pug">
  doctype html
  main( role="main" )
    .container
      .row
        .col-md-12
          | HabourFront
          <GoogleMap />
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';

export default {
  name: 'HabourFront',
  components: {
    GoogleMap,
  },
};
</script>

<style lang="stylus" scope>
.map
  flex 100% 1 1
  height 300px

  .map-view
    height 300px
</style>
