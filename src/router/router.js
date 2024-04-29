import Vue from 'vue';
import Router from 'vue-router';
import MainWeb from '@/components/MainWeb.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/MainWeb' ,
      name: 'MainWeb' ,
      component: MainWeb
    }
  ]
});
