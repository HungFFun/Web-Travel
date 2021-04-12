import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../page/HelloWorld.vue';
import TourDetail from '../page/TourDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/detail-tour',
      name: 'TourDetail',
      component: TourDetail,
    },
  ],
});
