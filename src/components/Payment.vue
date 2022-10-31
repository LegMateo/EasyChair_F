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
          <form>
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
          <form autocomplete="off">
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
          <form autocomplete="off">
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

      <h4 class="hr-lines">~</h4>
      <div class="container-fluid">
        <button type="button" class="btn btn-primary btn-lg btn btn1">
          Cash
        </button>
        <button
          id="butun"
          type="button"
          class="btn btn-primary btn-lg btn btn2">
          Room
        </button>
      </div>

      <div class="row" style="margin-top: 4vh; height: 6vh">
        <div class="col-12 daysform">
          <form autocomplete="off">
            <div class="card-header">
              <label for="fromto">Guest name</label>
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
          <form autocomplete="off">
            <div class="card-header">
              <label for="example">Guest Surname</label>
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
              <label for="example">Room number</label>
              <input
                value="2"
                type="number"
                min="1"
                class="form-control"
                id="roomnumber"
                placeholder="2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

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

.btn1 {
  background-color: rgba(95, 255, 95, 0.678);
  color: rgb(25, 122, 43);
  border-color: #ced4da;
}

.btn1:hover {
  background-color: rgb(25, 122, 43);
  color: rgba(95, 255, 95, 0.678);
}
.btn2 {
  background-color: rgba(43, 109, 252, 0.678);
  color: rgb(28, 43, 214);
}

.btn2:hover {
  background-color: rgb(28, 43, 214);
  color: #97c9fc;
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
.hr-lines:before {
  margin-left: auto;
  margin-right: auto;
  content: " ";
  display: block;
  height: 1px;
  width: 230px;
  position: absolute;
  top: 50%;
  left: 0;
  background: rgb(142, 136, 136);
}
.hr-lines {
  position: relative;
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
}

.hr-lines:after {
  margin-left: auto;
  margin-right: auto;
  content: "";
  height: 1px;
  width: 230px;
  background: rgb(142, 136, 136);
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
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

<script>
export default {
  name: "Payment",
};
</script>
