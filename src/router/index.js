import { createRouter, createWebHashHistory } from "vue-router";

import Menu from '../views/Menu.vue';
import Dashboard from '../views/Dashboard.vue';
import CardsBoard from '../views/CardsBoard.vue';
import Chart from '../views/Chart.vue';
import CoffeeBreak from '../views/CoffeeBreak.vue';
import Results from '../views/Results.vue';

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/cardsboard",
    name: "CardsBoard",
    component: CardsBoard
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart
  },
  {
    path: "/coffeebreak",
    name: "CoffeeBreak",
    component: CoffeeBreak
  },
  {
    path: "/results",
    name: "Results",
    component: Results
  },
];

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(),
  base: '/CAPI/',
  routes: routes
});

export default router;