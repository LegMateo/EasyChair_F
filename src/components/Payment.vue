<template>
  <div class="container-fluid conbody">
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto"></div>
        <div class="col-2 logo">
          <h1>Logo</h1>
        </div>
        <div class="col-auto"></div>
        <div class="col-6 name">
          <h1>Parasol no 621</h1>
        </div>
      </div>
      <div class="container forme">
        <div class="row">
          <div class="col-1">
            <p>Chairs</p>
          </div>

          <div class="col-auto chairsform">
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.conbody {
}

.name {
  margin-right: auto;
  margin-left: auto;
}

.chairsform {
  margin-left: auto;
  margin-right: auto;
}

.forme {
  width: 50%;
}
</style>

<script>
export default {
  name: "Payment",
};
</script>
