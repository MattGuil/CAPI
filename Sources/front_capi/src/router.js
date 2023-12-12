import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: () => import("@/views/Menu.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/cardsboard",
    name: "CardsBoard",
    component: () => import("@/views/CardsBoard.vue"),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("@/views/Chart.vue"),
  },
  {
    path: "/coffeebreak",
    name: "CoffeeBreak",
    component: () => import("@/views/CoffeeBreak.vue"),
  },
  {
    path: "/results",
    name: "Results",
    component: () => import("@/views/Results.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;