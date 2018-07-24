<template lang="pug">
  doctype html
  header
    .container
      .row
        .col-md-12
          b-navbar( toggleable="md" type="light" )
            b-navbar-brand( to="/" )
              | Logo
            b-navbar-toggle( target="nav_collapse" )
            b-collapse#nav_collapse( is-nav )
              b-navbar-nav.ml-auto
                b-nav-item( to="/" )
                  | Home
                b-nav-item-dropdown( text="Restaurants" )
                  b-dropdown-item( to="/HabourFront" )
                    | @HabourFront
</template>

<style lang="stylus">
.navbar
  padding 0.5rem 0
</style>
