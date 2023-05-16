import { createRouter, createWebHistory } from "vue-router";
import ReverolBeach from "../views/ReverolBeach.vue";
import MaroFamilyBeach from "@/views/MaroFamilyBeach";
import SunsetBeach from "../views/SunsetBeach.vue";
import MarinaBeach from "@/views/MarinaBeach";
import SurfmaniaBeach from "../views/SurfmaniaBeach.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";
import LoginAdmin from "@/views/LoginAdmin.vue";
import Invoice from "@/views/Invoice.vue";
import Admin from "@/views/Admin.vue";
import { Auth } from "@/services";

const routes = [
  {
    path: "/maro",
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

  {
    path: "/admin",
    name: "admin",
    component: Admin,
    // meta: {
    //   hideNavbar: true,
    // },
  },

  {
    path: "/invoice/:id",
    name: "invoice",
    props: true,
    component: Invoice,
    //component: () => import("@/views/Invoice.vue"),
    meta: {
      hideNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const javne = ["/loginadmin", "/login"];
  const loginPotreban = !javne.includes(to.path);
  const user = Auth.getUser();

  if (loginPotreban && !user) {
    next("/login");
    //next("/loginadmin");
    return;
  }

  next();
});

export default router;
