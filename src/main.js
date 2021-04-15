import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

require('bootstrap-css-only/css/bootstrap.min.css');
require('mdbvue/lib/css/mdb.min.css');
require('@fortawesome/fontawesome-free/css/all.min.css');

import * as mdbvue from 'mdbvue';
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
