import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import router from './router';
// import store from './store';

import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDdRshmfLX-xGjkhAbMa85qY4Msq8pBYWU',
    libraries: 'geometry,drawing,places',
  },
});

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
