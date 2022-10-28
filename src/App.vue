<template>
  <nav
    class="navbar bg-light"
    style="padding-left: 10px; padding-right: 10px; position: sticky; top: 0">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/logo_beach.png"
        alt="Logo"
        width="45"
        height="45"
        class="d-inline-block align-text-middle" />
      EasyChairPayment
    </a>

    <h2 class="dejt">
      <span id="datum"></span>
    </h2>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">User</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a>Home</a>
          </li>
          <li class="nav-item">
            <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div
        class="col col-lg-6"
        style="margin-top: 2%; padding-left: 3%; text-align: left">
        <h1>Welcome User</h1>
      </div>
      <div class="col-6 ol-lg-6" style="margin-top: 2%">
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          style="width: 80%">
          Open cash register
        </button>
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 90%">
    <div class="row justify-content-md-center">
      <div class="col col-lg-2">
        <nav aria-label="Page navigation example" id="Prev">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                style="position: inherit">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col">
        <span id="pagename"></span>
      </div>
      <div class="col col-lg-2">
        <nav
          id="Next"
          aria-label="Page navigation example"
          style="float: right">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                style="position: inherit">
                <span class="sr-only">Next</span>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
import MaroFamilyBeach from "@/views/MaroFamilyBeach.vue";
import ReverolBeach from "@/views/ReverolBeach.vue";
import SunsetBeach from "@/views/SunsetBeach.vue";
import MarinaBeach from "@/views/MarinaBeach.vue";
import SurfmaniaBeach from "@/views/SurfmaniaBeach.vue";
import Navigation from "@/components/Navigation.vue";
import OpenRegister from "@/components/OpenRegister.vue";
export default {
  components: {
    MaroFamilyBeach,
    ReverolBeach,
    SunsetBeach,
    MarinaBeach,
    SurfmaniaBeach,
    Navigation,
    OpenRegister,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.dejt {
  position: static;
  text-align: right;
}

.slide {
  min-height: 75vh;
  box-sizing: border-box;
}
</style>
