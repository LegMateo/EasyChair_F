<template>
  <div class="container-fluid conbody" style="margin-top: 1%">
    <div class="container">
      <div class="row">
        <div class="col-1 logo">
          <img
            src="@/assets/logo_beach.png"
            alt="Logo"
            width="160"
            height="160"
            class="d-inline-block align-text-middle"
          />
        </div>

        <div class="col-4 name">
          <h1>Parasol no {{ auth.id }}</h1>
        </div>
      </div>

      <form @submit.prevent="test" class="row g-3 needs-validation" novalidate>
        <div class="daysform">
          <div class="row" style="margin-top: 3vh; height: 6vh">
            <div class="col-12">
              <div class="form-group">
                <label for="chairs">Chairs</label>
                <input
                  v-model="chairs"
                  type="number"
                  min="2"
                  class="form-control guestnamex"
                  id="chairs1"
                  placeholder="2"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="form-group">
                <label>Date range</label>
                <VueDatePicker
                  v-model="date"
                  v-bind:clearable="false"
                  required
                  dark
                  hide-input-icon
                  range
                  multi-calendars
                  auto-apply
                  placeholder="Select Date"
                  :min-date="new Date()"
                  ignore-time-validation
                  :enable-time-picker="false"
                  :offset="20"
                  arrow-navigation
                  format="dd/MM/yyyy"
                  value-format="dd-MM-yyyy"
                  input-class-name="form-control guestnamex "
                >
                </VueDatePicker>
              </div>
            </div>
          </div>

          <hr class="hr-lines" />
          <div class="container-fluid">
            <button
              @submit.prevent="cash"
              v-on:click="
                (isHidden = true), (isHiddenc = false), (cashState = true)
              "
              value="true"
              id="cashbtn"
              type="button"
              class="btn btn-primary btn-lg btn btn1"
            >
              Cash
            </button>

            <button
              @submit.prevent="room"
              v-on:click="
                (isHidden = false), (isHiddenc = true), (cashState = false)
              "
              id="roombtn"
              type="button"
              class="btn btn-primary btn-lg btn btn2"
            >
              Room
            </button>
          </div>
        </div>

        <div class="container-fluid">
          <button
            v-if="!isHiddenc"
            style="
              margin-top: 4vh;
              width: 30%;
              margin-left: auto;
              margin-right: auto;
            "
            id="payc"
            type="submit"
            class="btn btn-primary btn-lg btn btn3"
            @click="validcheck()"
          >
            Proceed Payment
          </button>
        </div>

        <div v-if="!isHidden" class="daysform">
          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label id="label1" for="example">Guest name</label>
                <input
                  v-model="gname"
                  type="text"
                  pattern="[A-Za-z]{2,50}"
                  id="gname"
                  minlength="2"
                  class="guestnamex form-control"
                  placeholder="Ex. John"
                  name="name"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label id="label2" for="gsurname">Guest Surname</label>
                <input
                  v-model="gsurname"
                  type="text"
                  pattern="[A-Za-z]{2,50}"
                  id="gsurname"
                  minlength="2"
                  class="guestnamex form-control"
                  placeholder="Ex. Smith"
                  name="surname"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label id="label3" for="example">Room number</label>
                <select
                  v-model="roomnb"
                  class="guestnamex form-control"
                  id="roomnumber"
                  required
                >
                  <option value="" disabled selected hidden>
                    --Please choose an option--
                  </option>

                  <option value="A11">A11</option>
                  <option value="A12">A12</option>
                  <option value="A13">A13</option>
                  <option value="A14">A14</option>
                  <option value="A15">A15</option>
                  <option value="A16">A16</option>
                  <option value="B11">B11</option>
                  <option value="B12">B12</option>
                  <option value="B13">B13</option>
                  <option value="B14">B14</option>
                  <option value="B15">B15</option>
                  <option value="B16">B16</option>
                  <option value="C11">C11</option>
                  <option value="C12">C12</option>
                  <option value="C13">C13</option>
                  <option value="C14">C14</option>
                  <option value="C15">C15</option>
                  <option value="C16">C16</option>
                  <option value="D11">D11</option>
                  <option value="D12">D12</option>
                  <option value="D13">D13</option>
                  <option value="D14">D14</option>
                  <option value="D15">D15</option>
                  <option value="D16">D16</option>
                  <option value="F11">F11</option>
                  <option value="F12">F12</option>
                  <option value="F13">F13</option>
                  <option value="F14">F14</option>
                  <option value="F15">F15</option>
                  <option value="F16">F16</option>
                  <option value="G11">G11</option>
                  <option value="G12">G12</option>
                  <option value="G13">G13</option>
                  <option value="G14">G14</option>
                  <option value="G15">G15</option>
                  <option value="G16">G16</option>
                  <option value="H11">H11</option>
                  <option value="H12">H12</option>
                  <option value="H13">H13</option>
                  <option value="H14">H14</option>
                  <option value="H15">H15</option>
                  <option value="H16">H16</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!isHidden" class="container-fluid">
          <button
            style="
              margin-top: 4vh;
              margin-bottom: 4vh;
              width: 30%;
              margin-left: auto;
              margin-right: auto;
            "
            id="pay"
            type="submit"
            class="btn btn-primary btn-lg btn btn3"
            @click="validcheck()"
          >
            Proceed Payment
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";
import { Payment } from "@/services";
import { ajD } from "@/services/";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss";

import { ref } from "vue";
const date = ref();
export default {
  name: "Payment",
  components: { VueDatePicker },

  data() {
    return {
      isHidden: true,
      isHiddenc: true,
      beach: Auth.state.name,
      cashier: `${Auth.state.userName} ${Auth.state.userSurname}`,
      username: Auth.state.userUsername,
      date: "",
      chairs: "",
      parasol: Auth.state.id,
      gname: "",
      gsurname: "",
      roomnb: "",
      cashState: false,

      auth: Auth.state,
    };
  },

  methods: {
    async test() {
      let success = await Payment.payment(
        this.beach,
        this.cashier,
        this.username,
        this.chairs,
        this.date,
        this.parasol,
        this.gname,
        this.gsurname,
        this.roomnb,
        this.cashState
      );

      if (success == true) {
        this.$router.go(-1); //kasnije promijeni

        const ruuta = this.$router.resolve({
          path: `/invoice/${ajD.id_}`,
        });
        window.open(ruuta.href, "_blank");
      }
    },

    onMounted() {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    },

    room() {
      btnr.style.backgroundColor = "rgb(28, 43, 214)";
      btnr.style.color = "#97c9fc";

      const btnc = document.getElementById("cashbtn");
      btnc.style.backgroundColor = "rgba(95, 255, 95, 0.678)";
      btnc.style.color = "rgb(25, 122, 43)";
      btnc.style.borderColor = "#ced4da";
    },

    cash() {
      const btnr = document.getElementById("cashbtn");
      btnr.style.backgroundColor = "rgb(25, 122, 43)";
      btnr.style.color = "rgba(95, 255, 95, 0.678)";

      const btnc = document.getElementById("roombtn");
      btnc.style.backgroundColor = "rgba(43, 109, 252, 0.678)";
      btnc.style.color = "rgb(28, 43, 214)";
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

<style>
select:required:invalid {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  font-style: italic;
  text-align: left;
  float: left;

  color: #212529;
}

.guestnamex::placeholder {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  font-style: italic;
  text-align: left;
  float: left;
  opacity: 0.6;
  color: gray;
}

.guestnamex {
  padding: 0.375rem 0.75rem;
  color: #212529;

  appearance: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn1 {
  background-color: rgba(95, 255, 95, 0.678);
  color: rgb(25, 122, 43);
  border-color: #ced4da;
}

.btn1:hover {
  background-color: rgb(25, 122, 43) !important;
  color: rgba(95, 255, 95, 0.678) !important;
}
.btn2 {
  background-color: rgba(43, 109, 252, 0.678);
  color: rgb(28, 43, 214);
}

.btn2:hover {
  background-color: rgb(28, 43, 214) !important;
  color: #97c9fc !important;
}

.btn {
  margin-right: 1vh;
  margin-left: 1vh;
}

label {
  font-weight: lighter;
  font-style: italic;
  text-align: left;
  float: left;
}

.hr-lines {
  position: inherit;
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
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

.item {
  margin-left: auto;
  align-self: center;
  font-size: x-large;
  height: 3vh;
  width: 11vh;
}

.form-control {
  margin-left: auto;
  margin-right: auto;
}

.daysform {
  width: 25%;

  margin-left: auto;
  margin-right: auto;
}

.input-group {
  height: 3vh;
  width: 100%;
  align-self: center;
  margin-right: auto;
}
</style>
