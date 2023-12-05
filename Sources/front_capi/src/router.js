import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Menu",
    component: () => import("@/views/Menu.vue"),
  },
  {
    path: "/cardsboard",
    name: "CardsBoard",
    component: () => import("@/views/CardsBoard.vue"),
  },
  {
    path: "/coffeebreak",
    name: "CoffeeBreak",
    component: () => import("@/views/CoffeeBreak.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;