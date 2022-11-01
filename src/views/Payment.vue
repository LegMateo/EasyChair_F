<template>
  <div class="container-fluid conbody">
    <div class="container">
      <div class="row">
        <div class="col-auto"></div>
        <div class="col-1 logo">
          <img
            src="@/assets/logo_beach.png"
            alt="Logo"
            width="160"
            height="160"
            class="d-inline-block align-text-middle" />
        </div>

        <div class="col-4 name">
          <h1>Parasol no 621</h1>
        </div>
        <div class="col-auto"></div>
      </div>

      <div class="row" style="margin-top: 3vh; height: 6vh">
        <div class="col-12 daysform">
          <form name="frm">
            <div class="form-group">
              <label for="chairs">Chairs</label>
              <input
                value="2"
                type="number"
                min="1"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="2" />
            </div>
          </form>
        </div>
      </div>

      <div class="row" style="margin-top: 4vh; height: 6vh">
        <div class="col-12 daysform">
          <form autocomplete="off" name="frm">
            <div class="card-header">
              <label for="fromto">Begin Date</label>
              <input
                type="text"
                id="dp1"
                class="datepicker"
                placeholder="From"
                name="date"
                readonly /><span class="fa fa-calendar"></span>
            </div>
          </form>
        </div>
      </div>

      <div class="row" style="margin-top: 4vh; height: 6vh">
        <div class="col-12 daysform">
          <form autocomplete="off" name="frm">
            <div class="card-header">
              <label for="fromto">End Date</label>
              <input
                type="text"
                id="dp1"
                class="datepicker"
                placeholder="To"
                name="date"
                readonly /><span class="fa fa-calendar"></span>
            </div>
          </form>
        </div>
      </div>

      <hr class="hr-lines" />
      <div class="container-fluid">
        <button
          id="cashbtn"
          type="button"
          class="btn btn-primary btn-lg btn btn1"
          @click="cash()">
          Cash
        </button>
        <button
          id="roombtn"
          type="button"
          class="btn btn-primary btn-lg btn btn2"
          @click="visible()">
          Room
        </button>
      </div>
      <button
        style="
          margin-top: 4vh;
          width: 30%;
          margin-left: auto;
          margin-right: auto;
        "
        id="payc"
        type="button"
        class="btn btn-primary btn-lg btn btn3">
        Proceed Payment
      </button>
      <div class="row" style="margin-top: 4vh; height: 6vh">
        <div class="col-12 daysform">
          <form autocomplete="off" name="frm">
            <div class="card-header">
              <label id="label1" for="example">Guest name</label>
              <input
                type="text"
                id="gname"
                class="guestnamex"
                placeholder="Ex. John"
                name="name"
                required />
            </div>
          </form>
        </div>
      </div>

      <div class="row" style="margin-top: 4vh; height: 6vh">
        <div class="col-12 daysform">
          <form autocomplete="off" name="frm">
            <div class="card-header">
              <label id="label2" for="example">Guest Surname</label>
              <input
                type="text"
                id="gsurname"
                class="guestnamex"
                placeholder="Ex. Smith"
                name="surname"
                required />
            </div>
          </form>
        </div>
      </div>

      <div class="row" style="margin-top: 4vh; height: 6vh">
        <div class="col-12 daysform">
          <form autocomplete="off">
            <div class="card-header">
              <label id="label3" for="example">Room number</label>
              <select class="form-control" id="roomnumber">
                <option>A11</option>
                <option>A12</option>
                <option>A12</option>
                <option>A14</option>
                <option>A15</option>
                <option>A16</option>
                <option>B11</option>
                <option>B12</option>
                <option>B13</option>
                <option>B14</option>
                <option>B15</option>
                <option>B16</option>
                <option>C11</option>
                <option>C12</option>
                <option>C13</option>
                <option>C14</option>
                <option>C15</option>
                <option>C16</option>
                <option>D11</option>
                <option>D12</option>
                <option>D13</option>
                <option>D14</option>
                <option>D15</option>
                <option>D16</option>
                <option>F11</option>
                <option>F12</option>
                <option>F13</option>
                <option>F14</option>
                <option>F15</option>
                <option>F16</option>
                <option>G11</option>
                <option>G12</option>
                <option>G13</option>
                <option>G14</option>
                <option>G15</option>
                <option>G16</option>
                <option>H11</option>
                <option>H12</option>
                <option>H13</option>
                <option>H14</option>
                <option>H15</option>
                <option>H16</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div class="container-fluid">
        <button
          style="
            margin-top: 4vh;
            width: 30%;
            margin-left: auto;
            margin-right: auto;
          "
          id="pay"
          type="button"
          class="btn btn-primary btn-lg btn btn3">
          Proceed Payment
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
    visible() {
      const btnr = document.getElementById("roombtn");
      btnr.style.backgroundColor = "rgb(28, 43, 214)";
      btnr.style.color = "#97c9fc";

      const btnc = document.getElementById("cashbtn");
      btnc.style.backgroundColor = "rgba(95, 255, 95, 0.678)";
      btnc.style.color = "rgb(25, 122, 43)";
      btnc.style.borderColor = "#ced4da";

      const status = "room";
      let x = document.getElementById("gsurname");
      let y = document.getElementById("gname");
      let z = document.getElementById("roomnumber");
      let h = document.getElementById("pay");
      let c = document.getElementById("payc");
      let g1 = document.getElementById("label1");
      let g2 = document.getElementById("label2");
      let g3 = document.getElementById("label3");

      if ((x.style.display = "none")) {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      if ((y.style.display = "none")) {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
      if ((z.style.display = "none")) {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
      if ((g1.style.display = "none")) {
        g1.style.display = "block";
      } else {
        g1.style.display = "none";
      }
      if ((g2.style.display = "none")) {
        g2.style.display = "block";
      } else {
        g2.style.display = "none";
      }
      if ((g3.style.display = "none")) {
        g3.style.display = "block";
      } else {
        g3.style.display = "none";
      }
      if ((h.style.display = "none")) {
        h.style.display = "block";
      } else {
        h.style.display = "none";
      }
      if ((c.style.display = "block")) {
        c.style.display = "none";
      } else {
        c.style.display = "block";
      }
    },

    cash() {
      const btnr = document.getElementById("cashbtn");
      btnr.style.backgroundColor = "rgb(25, 122, 43)";
      btnr.style.color = "rgba(95, 255, 95, 0.678)";

      const btnc = document.getElementById("roombtn");
      btnc.style.backgroundColor = "rgba(43, 109, 252, 0.678)";
      btnc.style.color = "rgb(28, 43, 214)";

      const status = "cash";
      let x = document.getElementById("gsurname");
      let y = document.getElementById("gname");
      let z = document.getElementById("roomnumber");
      let h = document.getElementById("pay");
      let c = document.getElementById("payc");
      let g1 = document.getElementById("label1");
      let g2 = document.getElementById("label2");
      let g3 = document.getElementById("label3");
      if ((x.style.display = "block")) {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
      if ((y.style.display = "block")) {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
      if ((z.style.display = "block")) {
        z.style.display = "none";
      } else {
        z.style.display = "block";
      }
      if ((g1.style.display = "block")) {
        g1.style.display = "none";
      } else {
        g1.style.display = "block";
      }
      if ((g2.style.display = "block")) {
        g2.style.display = "none";
      } else {
        g2.style.display = "block";
      }
      if ((g3.style.display = "block")) {
        g3.style.display = "none";
      } else {
        g3.style.display = "block";
      }
      if ((h.style.display = "block")) {
        h.style.display = "none";
      } else {
        h.style.display = "block";
      }
      if ((c.style.display = "none")) {
        c.style.display = "block";
      } else {
        c.style.display = "none";
      }
    },
  },
};
</script>

<style>
#payc {
  display: none;
}
#pay {
  display: none;
}
#gname {
  display: none;
}

#label1 {
  display: none;
}
#label2 {
  display: none;
}
#label3 {
  display: none;
}

#roomnumber {
  display: none;
}
#gsurname {
  display: none;
}
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
  height: 3vh;
  width: 25%;
  align-self: center;
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
