import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import HomeView from '../views/HomeView.vue'
import AcercaView from '../views/Acerca.vue'
import LoginView from '../views/LoginView.vue'
import Favorites from '../views/FavoritesView.vue'
import DetalleView from '../views/DetalleView.vue'


const routes=  [
    {
      path:'/',
      name: 'home',
      component: HomeView 
    },

    { 
      path:'/acerca',
      name: 'acerca',
      component: AcercaView
    },

    { 
      path:'/login',
      name: 'login',
      component: LoginView
    },

    { 
      path:'/favoritos',
      name: 'favoritos',
      component: Favorites,
      meta: { requiresAuth: true }
    },

    {
      path: '/ciudad/:id', 
      name: 'detalle',
      component: DetalleView,
      props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    console.warn("Intento de acceso no autorizado a:", to.path);
    
      next('/login');
    } else {
      next();
    }
  });

export default router;

