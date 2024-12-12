import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("../views/Product.vue"),
      children: [
        {
          path: "owner",
          name: "owner",
          component: () => import("../views/Owner.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/:catchall(.*)*",
      name: "404",
      component: () => import("../views/errors/404.vue"),
    },
  ],
});

export default router;
