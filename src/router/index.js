import { createRouter, createWebHistory } from "vue-router";
import ReverolBeach from "../views/ReverolBeach.vue";
import MaroFamilyBeach from "@/views/MaroFamilyBeach";
import SunsetBeach from "../views/SunsetBeach.vue";
import MarinaBeach from "@/views/MarinaBeach";
import SurfmaniaBeach from "../views/SurfmaniaBeach.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
