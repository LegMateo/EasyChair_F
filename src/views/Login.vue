<template>
  <div class="container-fluid conbody">
    <div class="container">
      <div class="row">
        <div class="col-6 logo">
          <img
            src="@/assets/logo_beach.png"
            alt="Logo"
            width="160"
            height="160"
            class="d-inline-block align-text-middle" />
        </div>

        <div class="col-6 name">
          <h1>Easy Chair Payment</h1>
        </div>
      </div>

      <div class="row" style="margin-top: 3vh; height: 6vh">
        <div class="col-12 loginpass">
          <form name="frm">
            <div class="form-group">
              <label for="chairs">Cashier Login</label>
              <input
                type="password"
                minlength="4"
                maxlength="22"
                class="form-control"
                id="exampleFormControlInput1" />
            </div>
          </form>
        </div>
      </div>

      <div class="row" style="margin-top: 2vh; height: 6vh">
        <div class="col-12 logina">
          <a href="#" id="Adminlogin" class="admin" @click="toAdmin()"
            >Admin login</a
          >
        </div>
      </div>

      <div class="container-fluid">
        <button
          id="roombtn"
          type="button"
          class="btn btn-primary btn-lg btn btnlg">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      name: "Vue.js",
    };
  },
  methods: {
    toAdmin() {
      this.$router.push("/loginadmin");
    },
  },
};
</script>

<style>
.logina {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  font-weight: lighter;
  font-style: italic;
  text-align: right;
  padding-right: 3vh;
}
.btnlg {
  width: 25%;
  background-color: rgba(43, 109, 252, 0.678);
  color: rgb(28, 43, 214);
}

.btnlg:hover {
  background-color: rgb(28, 43, 214) !important;
  color: #97c9fc !important;
}

label {
  font-weight: lighter;
  font-style: italic;
  text-align: left;
  float: left;
}

.logo {
  margin-left: auto;
  width: 160px;
  height: 160px;
}

.name {
  margin-right: auto;
  align-self: flex-end;
}

.loginpass {
  height: 3vh;
  width: 40%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
