import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import HabourFront from '../views/HabourFront.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/HabourFront',
      name: 'habourfront',
      component: HabourFront,
    },
  ],
});
