<template>
  <div class="background">
    <div class="content">
      <div class="container" style="padding-top: 10%">
        <div class="row" style="display: flex; flex-wrap: wrap">
          <div class="col-lg-6">
            <!-- style="
              display: flex;
              flex-flow: column wrap;
              justify-content: space-around;
            "-->
            <div class="text-center card-box h-100">
              <div class="member-card pt-2 pb-2">
                <div class="thumb-lg member-thumb mx-auto">
                  <img
                    src="@/assets/profile_image.png"
                    class="rounded-circle img-thumbnail"
                    alt="profile-image"
                  />
                </div>

                <div class="container-fluid forms">
                  <form
                    @submit.prevent="register"
                    class="forma needs-validation"
                    novalidate
                  >
                    <div class="card-header">
                      <label id="label" for="example">Cashier name</label>
                      <input
                        v-model="name"
                        type="text"
                        pattern="[A-Za-z]{2,50}"
                        id="cname"
                        minlength="2"
                        class="cashier form-control"
                        placeholder="Ex. John"
                        name="name"
                        required
                      />
                    </div>

                    <div class="card-header">
                      <label id="label" for="example">Cashier surname</label>
                      <input
                        v-model="surname"
                        type="text"
                        pattern="[A-Za-z]{2,50}"
                        id="csurname"
                        minlength="2"
                        class="cashier form-control"
                        placeholder="Ex. Smith"
                        name="name"
                        required
                      />
                    </div>

                    <div class="card-header">
                      <label id="label" for="example">Username</label>
                      <input
                        v-model="username"
                        type="text"
                        pattern="[A-Za-z]{2,10}"
                        id="csurname"
                        minlength="3"
                        class="cashier form-control"
                        placeholder="Username"
                        name="name"
                        required
                      />
                    </div>

                    <div class="card-header">
                      <label id="label" for="example">Password</label>
                      <input
                        v-model="password"
                        type="password"
                        id="csurname"
                        minlength="4"
                        class="cashier form-control"
                        placeholder="Password"
                        name="surname"
                        required
                      />
                    </div>

                    <div class="container-fluid bottom">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg btn-rounded waves-effect"
                        style="width: 100%"
                        @click="validcheck()"
                      >
                        Add User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!---->
          <Cashiers v-for="value in data" :key="value.id" :users="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Posts, Auth } from "@/services/index.js";
import Cashiers from "@/components/Cashiers.vue";
export default {
  name: "Admin",
  data() {
    return {
      data: "",
      name: "",
      surname: "",
      username: "",
      password: "",
    };
  },

  methods: {
    async fetchUsers() {
      this.data = await Posts.getAll();
    },

    async register() {
      let success = await Auth.register(
        this.name,
        this.surname,
        this.username,
        this.password
      );

      if (success == true) {
        this.$router.go();
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
  },

  beforeMount() {
    this.fetchUsers();
  },

  components: {
    Cashiers,
  },
};
</script>

<style lang="scss">
.bottom {
  margin-top: 10%;
  width: 100%;
}
.background {
  background: #dcdcdc;
}
.card-box {
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: #fff;
}

.social-links li a {
  border-radius: 50%;
  color: rgba(121, 121, 121, 0.8);
  display: inline-block;
  height: 30px;
  line-height: 27px;
  border: 2px solid rgba(121, 121, 121, 0.5);
  text-align: center;
  width: 30px;
}

.social-links li a:hover {
  color: #797979;
  border: 2px solid #797979;
}
.thumb-lg {
  height: 12vh;
  width: 12vh;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.text-pink {
  color: #ff679b !important;
}

.btn-rounded {
  border-radius: 2em;
}
.text-muted {
  color: #98a6ad !important;
}

.info {
  text-align: center;
}
.list-inline-item:not(:last-child) {
  margin-right: 0;
}
h4 {
  line-height: 32px;
  font-size: 18px;
}
.cashier::placeholder {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  font-style: italic;
  text-align: left;
  float: left;
  opacity: 0.6;
  color: gray;
}

.cashier {
  margin-left: auto;
  margin-right: auto;

  padding: 0.375rem 0.75rem;
  color: #212529;

  appearance: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;

  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.forms {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.card-header {
  padding: 1vh;
}

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.row > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.member-card {
  height: 100%;
}

.forma {
  height: 100%;
}
</style>
