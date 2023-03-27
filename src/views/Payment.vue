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
            class="d-inline-block align-text-middle" />
        </div>

        <div class="col-4 name">
          <h1>Parasol no {{ auth.id }}</h1>
        </div>
      </div>

      <form class="row g-3 needs-validation" novalidate>
        <div class="daysform">
          <div class="row" style="margin-top: 3vh; height: 6vh">
            <div class="col-12">
              <div class="form-group">
                <label for="chairs">Chairs</label>
                <input
                  value="2"
                  type="number"
                  min="1"
                  class="form-control"
                  id="chairs1"
                  placeholder="2"
                  required />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label for="dp1">Begin Date</label>
                <input
                  type="text"
                  id="dp1"
                  class="datepicker form-control"
                  placeholder="From"
                  name="date"
                  required /><span class="fa fa-calendar"></span>
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label for="fromto">End Date</label>
                <input
                  type="text"
                  id="dp1"
                  class="datepicker form-control"
                  placeholder="To"
                  name="date"
                  required /><span class="fa fa-calendar"></span>
              </div>
            </div>
          </div>

          <hr class="hr-lines" />
          <div class="container-fluid">
            <button
              v-on:click="(isHidden = true), (isHiddenc = false)"
              id="cashbtn"
              type="button"
              class="btn btn-primary btn-lg btn btn1"
              @click="cash()">
              Cash
            </button>

            <button
              v-on:click="(isHidden = false), (isHiddenc = true)"
              id="roombtn"
              type="button"
              class="btn btn-primary btn-lg btn btn2"
              @click="room()">
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
            @click="validcheck()">
            Proceed Payment
          </button>
        </div>

        <div v-if="!isHidden" class="daysform">
          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label id="label1" for="example">Guest name</label>
                <input
                  type="text"
                  id="gname"
                  minlength="2"
                  class="guestnamex form-control"
                  placeholder="Ex. John"
                  name="name"
                  required />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label id="label2" for="gsurname">Guest Surname</label>
                <input
                  type="text"
                  id="gsurname"
                  minlength="2"
                  class="guestnamex form-control"
                  placeholder="Ex. Smith"
                  name="surname"
                  required />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 4vh; height: 6vh">
            <div class="col-12">
              <div class="card-header">
                <label id="label3" for="example">Room number</label>
                <select class="form-control required" id="roomnumber">
                  <option value="">--Please choose an option--</option>

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
            @click="validcheck()">
            Proceed Payment
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { Auth } from "@/services";

  export default {
    name: "Payment",
    data() {
      return {
        isHidden: true,
        isHiddenc: true,

        chairs: "",
        begin: "",
        end: "",
        gname: "",
        gsurname: "",
        auth: Auth.state,
      };
    },
    methods: {
      refresh() {
        this.$router.go();
      },
      room() {
        const btnr = document.getElementById("roombtn");
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
  .datepicker::placeholder {
    font-weight: lighter;
    font-style: italic;
    text-align: left;
    float: left;
    opacity: 0.6;
  }
  .guestnamex::placeholder {
    font-weight: lighter;
    font-style: italic;
    text-align: left;
    float: left;
    opacity: 0.6;
  }

  .guestnamex {
    padding: 0.375rem 0.75rem;
    color: #212529;
    -webkit-appearance: none;
    -moz-appearance: none;
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

  #dp1 {
    display: block;

    padding: 0.375rem 0.75rem;
    color: #212529;
    -webkit-appearance: none;
    -moz-appearance: none;
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

  .form-control:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(59, 124, 255, 0.8);
  }

  input:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(59, 124, 255, 0.8);
  }

  ::placeholder {
    color: #000;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #000;
  }

  ::-ms-input-placeholder {
    color: #000;
  }

  button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0;
  }

  .datepicker {
    font-weight: lighter;
    font-style: italic;
    text-align: left;
    float: left;
    opacity: 1;
    padding-left: 10px;
    background-color: #000;
    color: #fff;
  }

  .datepicker-dropdown:after {
    border-bottom: 6px solid #000;
  }

  thead tr:nth-child(3) th {
    color: #fff !important;
    font-weight: bold;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .dow,
  .old-day,
  .day,
  .new-day {
    width: 40px !important;
    height: 40px !important;
    border-radius: 0px !important;
  }

  .old-day:hover,
  .day:hover,
  .new-day:hover,
  .month:hover,
  .year:hover,
  .decade:hover,
  .century:hover {
    border-radius: 6px !important;
    background-color: #eee;
    color: #000;
  }

  .active {
    border-radius: 6px !important;
    background-image: linear-gradient(#90caf9, #64b5f6) !important;
    color: #000 !important;
  }

  .disabled {
    color: #616161 !important;
  }

  .prev,
  .next,
  .datepicker-switch {
    border-radius: 0 !important;
    padding: 20px 10px !important;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff !important;
    opacity: 0.8;
  }

  .prev:hover,
  .next:hover,
  .datepicker-switch:hover {
    background-color: inherit !important;
    opacity: 1;
  }

  .cell {
    border: 1px solid #bdbdbd;
    margin: 2px;
    cursor: pointer;
  }

  .cell:hover {
    border: 1px solid #3d5afe;
  }

  .cell.select {
    background-color: #3d5afe;
    color: #fff;
  }

  .fa-calendar {
    color: #fff;
    font-size: 30px;
    padding-top: 8px;
    padding-left: 5px;
    cursor: pointer;
  }
</style>
