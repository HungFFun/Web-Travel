import Vue from 'vue';
import Router from 'vue-router';
import Home from '../page/Home.vue';
import TourDetail from '../page/TourDetail.vue';
import BookTour from '../page/BookTour.vue';
import ListTour from '../page/ListTour.vue';
import ProductSuggestion from '../page/ProductSuggestion.vue';
import Confirm from '../page/ConfirmTour.vue';
import Payment from '../page/Payment.vue';
import Login from '../page/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail-tour/:id',
      name: 'TourDetail',
      component: TourDetail,
    },
    {
      path: '/book-tour/:id',
      name: 'BookTour',
      component: BookTour,
    },
    {
      path: '/list-tour',
      name: 'ListTour',
      component: ListTour,
    },
    {
      path: '/product-suggestion',
      name: 'ProductSuggestion',
      component: ProductSuggestion,
    },
    {
      path: '/Confirm',
      name: 'Confirm',
      component: Confirm,
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
  ],
});
