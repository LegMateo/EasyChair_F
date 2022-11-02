import { createRouter, createWebHistory } from "vue-router";
import ReverolBeach from "../views/ReverolBeach.vue";
import MaroFamilyBeach from "@/views/MaroFamilyBeach";
import SunsetBeach from "../views/SunsetBeach.vue";
import MarinaBeach from "@/views/MarinaBeach";
import SurfmaniaBeach from "../views/SurfmaniaBeach.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";
import LoginAdmin from "@/views/LoginAdmin.vue";

const routes = [
  {
    path: "/",
    name: "marofamilybeach",
    component: MaroFamilyBeach,
  },
  {
    path: "/reverolbeach",
    name: "reverolbeach",
    component: ReverolBeach,
  },
  {
    path: "/sunsetbeach",
    name: "sunsetbeach",
    component: SunsetBeach,
  },
  {
    path: "/marinabeach",
    name: "marinatbeach",
    component: MarinaBeach,
  },
  {
    path: "/surfmaniabeach",
    name: "surfmaniabeach",
    component: SurfmaniaBeach,
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/loginadmin",
    name: "loginadmin",
    component: LoginAdmin,
    meta: {
      hideNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
