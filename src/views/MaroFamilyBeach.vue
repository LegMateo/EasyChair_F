<template>
  <div>
    <h1>Maro Family Beach</h1>
    <p>
      This is an about page used to illustrate mapping a view to a router with
      Vue Router.
    </p>
  </div>
</template>

<script>
import OpenRegister from "@/components/OpenRegister.vue";
import Navigation from "@/components/Navigation.vue";
import { useRoute } from "vue-router";
export default {
  name: "MaroFamilyBeach",
  components: {
    OpenRegister,
    Navigation,
  },
};
</script>
