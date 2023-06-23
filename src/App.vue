<template>
  <nav
    @click="getData"
    v-if="!$route.meta.hideNavbar"
    class="navbar bg-light"
    style="padding-left: 10px; padding-right: 10px; position: sticky; top: 0"
  >
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/logo_beach.png"
            alt="Logo"
            width="45"
            height="45"
            class="d-inline-block align-text-middle"
          />
          EasyChairPayment
        </a>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="container-fluid">
          <div class="d-flex justify-content-end align-items-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>

        <h2
          class="text-center flex-grow-1"
          style="padding-top: 1vh"
          v-if="auth.authenticated && !auth.isAdmin"
        >
          {{ auth.userName }} {{ auth.userSurname }}
        </h2>
        <div
          class="offcanvas-header"
          v-if="auth.authenticated && !auth.isAdmin"
        >
          <div class="mt-4">
            <div class="row" style="padding-bottom: 10px">
              <div class="col-4">
                <div class="mt-3">
                  <p class="mb-0 text-muted">1 Day Reservations</p>
                  <h4>{{ usersData.one }}</h4>
                </div>
              </div>
              <div class="col-4">
                <div class="mt-3">
                  <p class="mb-0 text-muted">3 Day Reservations</p>
                  <h4>{{ usersData.three }}</h4>
                </div>
              </div>
              <div class="col-4">
                <div class="mt-3">
                  <p class="mb-0 text-muted">7 Day reservations</p>
                  <h4>{{ usersData.seven }}</h4>
                </div>
              </div>
            </div>
            <div class="row" style="padding-bottom: 10px">
              <div class="col-4">
                <div class="mt-3">
                  <p class="mb-0 text-muted">Total Days Reserved</p>
                  <h4>{{ usersData.days }}</h4>
                </div>
              </div>
              <div class="col-4">
                <div class="mt-3">
                  <p class="mb-0 text-muted">Total Chairs Reserved</p>
                  <h4>{{ usersData.sumChairs }}</h4>
                </div>
              </div>
              <div class="col-4">
                <div class="mt-3">
                  <p class="mb-0 text-muted">Total Earnings</p>
                  <h4>{{ usersData.total }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="offcanvas-body"
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 6vh;
          "
        >
          <div></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <span v-if="auth.authenticated">
                <a
                  @click="logout"
                  class="btn btn-info btn-lg my-2 my-sm-0"
                  href="#"
                  >Logout</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!----
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-2">
        <nav aria-label="Page navigation example" id="Prev">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                style="position: inherit"
              >
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
          style="float: right"
        >
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                style="position: inherit"
              >
                <span class="sr-only">Next</span>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>  --->

  <router-view />
</template>

<script>
import { Auth, Posts } from "@/services";
export default {
  data() {
    return {
      auth: Auth.state,
      usersData: "",
    };
  },

  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },

    async getData() {
      this.usersData = await Posts.getUserData();

      //console.log(this.usersData);
    },
  },
};
</script>

<style lang="scss">
.offcanvas-header {
  padding-left: 2.3vh;
}
.btn-close {
  padding: 3vh;
  font-size: large;
}
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

.slide {
  min-height: 75vh;
  box-sizing: border-box;
}

.flex-grow-1 {
  flex-grow: 0;
}
</style>
