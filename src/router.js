import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import HabourFront from './views/HabourFront';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: "/HabourFront",
      name: "habourfront",
      component: HabourFront
    },
  ],
});
