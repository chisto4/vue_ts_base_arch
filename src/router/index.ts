import { createRouter, createWebHistory } from 'vue-router';
import SingUp from '../views/SingUp.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SingUp,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/girls',
      name: 'girls',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GirlsView.vue'),
    },
    {
      path: '/vuedocs',
      name: 'VueDoc`s',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VueDocs.vue'),
    },
    {
      path: '/flood',
      name: 'flood',
      component: () => import('../views/PostsPage.vue'),
    },
  ],
}); 

export default router;
