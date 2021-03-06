import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import 'buefy/dist/buefy.css';
import router from './router';
import VueResource from 'vue-resource';
import 'boxicons'
import VueScrollReveal from 'vue-scroll-reveal';

import LazyLoadDirective from "./directives/LazyLoadDirective.vue";

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


Vue.directive("lazyload", LazyLoadDirective);

Vue.use(VueResource);

Vue.config.productionTip = false;

Vue.use(Buefy);

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1,
  distance: '20px',
  mobile: true
})


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
