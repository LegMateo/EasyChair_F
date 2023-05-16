<template>
  <div class="col-lg-6">
    <div class="text-center card-box h-100">
      <div class="member-card pt-2 pb-2">
        <div
          class="thumb-lg member-thumb mx-auto"
          v-on:click="(isHiddenU = true), (isHiddenP = true)"
        >
          <img
            src="@/assets/profile_image.png"
            class="rounded-circle img-thumbnail"
            alt="profile-image"
          />
        </div>

        <div class="" v-on:click="(isHiddenU = true), (isHiddenP = true)">
          <h4>{{ users._id.name }} {{ users._id.surname }}</h4>
        </div>
        <ul v-on:click="(isHiddenU = true), (isHiddenP = true)">
          <li
            class="list-inline-item"
            style="width: 30%; margin-left: auto; margin-right: auto"
          >
            <p class="text-muted info">
              username <span>| </span
              ><span
                ><a href="#" class="text-pink">{{
                  users._id.username
                }}</a></span
              >
            </p>
          </li>

          <li
            class="list-inline-item"
            style="width: 40%; margin-left: auto; margin-right: auto"
          >
            <p class="text-muted info">
              password <span>| </span
              ><span><a href="#" class="text-pink">*******</a></span>
            </p>
          </li>
        </ul>
        <ul class="social-links list-inline">
          <li class="list-inline-item">
            <button
              type="button"
              class="btn btn-light"
              v-on:click="(isHiddenU = false), (isHiddenP = true)"
            >
              <i class="bi bi-pen"></i> Username
            </button>
          </li>
          <li class="list-inline-item">
            <button
              type="button"
              class="btn btn-light"
              v-on:click="(isHiddenU = true), (isHiddenP = false)"
            >
              <i class="bi bi-pen"></i> Password
            </button>
          </li>
        </ul>
        <div class="container-fluid forms">
          <form
            @submit.prevent="change"
            class="forma needs-validation"
            novalidate
          >
            <div class="card-header" v-if="!isHiddenU">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding-bottom: 1vh;
                "
              >
                <button
                  v-on:click="(isHiddenU = true), (isHiddenP = true)"
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  style="margin-right: auto; padding-right: 25px"
                ></button>
                <input
                  v-model="new_username"
                  type="text"
                  pattern="[A-Za-z]{2,50}"
                  id="nuname"
                  minlength="2"
                  class="form-control"
                  placeholder="New Username"
                  name="username"
                  required
                />
              </div>
            </div>
            <div class="card-header" v-if="!isHiddenP">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding-bottom: 1vh;
                "
              >
                <button
                  v-on:click="(isHiddenU = true), (isHiddenP = true)"
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  style="margin-right: auto; padding-right: 25px"
                ></button>
                <input
                  v-model="new_password"
                  type="password"
                  pattern="[A-Za-z]{2,50}"
                  id="cname"
                  minlength="2"
                  class="cashier form-control"
                  placeholder="New Password"
                  name="name"
                  required
                />
              </div>
            </div>
            <div>
              <button
                v-if="!isHiddenU"
                type="submit"
                class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-dark"
                style="margin-top: 1px !important"
              >
                <span class="bi bi-pen"></span>
                Change Username
              </button>
            </div>
            <div>
              <button
                v-if="!isHiddenP"
                type="submit"
                class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                style="margin-top: 1px !important"
              >
                <span class="bi bi-pen"></span>
                Change Password
              </button>
            </div>
          </form>
        </div>
        <!-- 
        <button
          v-on:click="(isHiddenU = true), (isHiddenP = true)"
          @click="deleteuser()"
          type="submit"
          class="btn btn-danger mt-3 btn-rounded waves-effect w-md waves-light"
        >
          <span class="bi bi-trash-fill"></span>
          Delete user
        </button> -->
        <!-- Button trigger modal -->
        <button
          v-on:click="(isHiddenU = true), (isHiddenP = true)"
          type="button"
          class="btn btn-danger mt-3 btn-rounded waves-effect w-md waves-light"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <span class="bi bi-trash-fill"></span>
          Delete user
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Delete user</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure you want to permenatly delete user "{{
                  users._id.name
                }}
                {{ users._id.surname }}"
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click="deleteuser()"
                  type="button"
                  class="btn btn-danger"
                >
                  Delete user
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4" v-on:click="(isHiddenU = true), (isHiddenP = true)">
          <div class="row" style="padding-bottom: 10px">
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">1 Day Reservations</p>
                <h4>{{ users.one }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">3 Day Reservations</p>
                <h4>{{ users.three }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">7 Day reservations</p>
                <h4>{{ users.seven }}</h4>
              </div>
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">Total Days Reserved</p>
                <h4>{{ users.chairs }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">Total Chairs Reserved</p>
                <h4>{{ users.chairs }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">Total Earnings</p>
                <h4>{{ users.total }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Posts } from "@/services/index.js";
export default {
  props: ["users"],
  name: "Cashiers",

  data() {
    return {
      isHiddenU: true,
      isHiddenP: true,
      new_password: "",
      new_username: "",
      id: this.users.id,
      old_username: this.users._id.username,
    };
  },

  methods: {
    async change() {
      let success = await Posts.getChange(
        this.id,
        this.new_password,
        this.new_username,
        this.old_username
      );
      if (success == true) {
        this.$router.go();
      }
    },

    async deleteuser() {
      this.$router.resolve({
        path: `/admin/${this.id}`,
      });
      let remove = await Posts.deleteOne(this.id);

      if (remove == true) {
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
};
</script>
