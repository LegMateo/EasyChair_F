<template>
  <div class="container-fluid conbody" style="margin-top: 10%">
    <div class="container">
      <div class="row">
        <div class="col-6 logo">
          <img
            src="@/assets/logo_beach.png"
            alt="Logo"
            width="160"
            height="160"
            class="d-inline-block align-text-middle"
          />
        </div>

        <div class="col-6 name">
          <h1>Easy Chair Payment</h1>
          <h3>For Administrators</h3>
        </div>
      </div>

      <form
        @submit.prevent="login"
        class="row g-3 needs-validation"
        style="margin-top: 3vh; height: 6vh"
        novalidate
      >
        <div class="col-4 loginpass">
          <label for="validationCustom001" class="form-label"
            >Username(admin)</label
          >
          <input
            v-model="username"
            type="password"
            minlength="4"
            maxlength="22"
            class="form-control"
            id="validationCustom001"
            required
          />

          <label for="validationCustom001" class="form-label"
            >Password(admin)</label
          >
          <input
            v-model="password"
            type="password"
            minlength="4"
            maxlength="22"
            class="form-control"
            id="validationCustom001"
            required
          />
        </div>

        <div class="row" style="margin-top: 14vh; height: 7vh">
          <div class="col-12 logina">
            <a href="#" id="Adminlogin" class="admin" @click="toCashier()"
              >Cashier login</a
            >
          </div>
        </div>

        <div class="container-fluid" style="margin-top: 2vh; height: 6vh">
          <button
            id="roombtn"
            type="submit"
            class="btn btn-primary btn-lg btn btnlg"
            @click="validcheck()"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "AdminLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login() {
      let success = await Auth.loginAdmin(this.username, this.password);

      if (success == true) {
        this.$router.push({ name: "admin" }); //kasnije promijeni
      }
    },

    validcheck() {
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function () {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add("was-validated");
            },
            false
          );
        });
      })();
    },

    toCashier() {
      this.$router.push("/login");
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
  padding-right: 0vh;
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
  width: auto;
}

.loginpass {
  height: 3vh;
  width: 40%;

  align-self: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
