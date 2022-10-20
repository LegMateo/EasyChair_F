<template>
  <div>
    <OpenRegister></OpenRegister>
    <Navigation></Navigation>
    <h1>Surfmania Beach</h1>
    <p>
      This is an about page used to illustrate mapping a view to a router with
      Vue Router.
    </p>
  </div>
</template>

<script>
import OpenRegister from "@/components/OpenRegister.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "SurfmaniaBeach",
  components: {
    OpenRegister,
    Navigation,
  },
};
</script>
