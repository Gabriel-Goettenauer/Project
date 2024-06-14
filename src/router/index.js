import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormAdoption from '@/views/FormAdoption.vue';
import SeuFavorito from '@/views/SeuFavorito.vue';
import Congratulations from '../views/Congratulations.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formAdoption',
    name: 'FormAdoption',
    component: FormAdoption,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: SeuFavorito
  },
  {
    path: '/Congratulations',
    name: 'Congratulations',
    component: Congratulations
  }

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
