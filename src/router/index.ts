import { createRouter, createWebHistory } from "vue-router";
import CustomersCreate from "../views/CustomersCreate.vue";
import CustomersIndex from "../views/CustomersIndex.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/FairwindsFrontEnd/",
      name: "CustomersIndex",
      component: CustomersIndex,
    },
    {
      path: "/FairwindsFrontEnd/Create",
      name: "CustomersCreate",
      component: CustomersCreate,
    },
  ],
});
