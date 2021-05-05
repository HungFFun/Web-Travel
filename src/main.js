import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Notifications from 'vue-notification';
import firebase from 'firebase';

require('bootstrap-css-only/css/bootstrap.min.css');
require('mdbvue/lib/css/mdb.min.css');
require('@fortawesome/fontawesome-free/css/all.min.css');

// cấu hình thư viên calendar
import VCalendar from 'v-calendar';
Vue.use(VCalendar);

// thư viên mdb bootstrap
import * as mdbvue from 'mdbvue';
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

//  thư viện editer
// Basic Use - Covers most scenarios
import { VueEditor } from 'vue2-editor';
Vue.use(VueEditor);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Notifications);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSZx5HXGfL5wW7XzEtqwvsHLe6G2w845c',
  authDomain: 'banda-fly.firebaseapp.com',
  projectId: 'banda-fly',
  storageBucket: 'banda-fly.appspot.com',
  messagingSenderId: '944606554683',
  appId: '1:944606554683:web:24e81fb42c805ca5384a1e',
  measurementId: 'G-Z2F733NV5W',
};
firebase.initializeApp(firebaseConfig);

// validate
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
