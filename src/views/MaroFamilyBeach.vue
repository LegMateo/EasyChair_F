<template>
  <div>
    <h1>Maro Family Beach</h1>
    <p>
      This is an about page used to illustrate mapping a view to a router with
      Vue Router.
    </p>
  </div>

  <div class="container-fluid">
    <div class="imgbk">
      <div class="row justify-content-start" style="margin-bottom: 10vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">501</label>
            <button type="submit" class="sbtn" @click="btnid(501)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">502</label>
            <button type="submit" class="sbtn" @click="btnid(502)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">503</label>
            <button type="submit" class="sbtn" @click="btnid(503)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">504</label>
            <button type="submit" class="sbtn" @click="btnid(504)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">505</label>
            <button type="submit" class="sbtn" @click="btnid(505)"></button>
          </div>
          <div class="col-1 sun">
            <label class="id">506</label>
            <button type="submit" class="sbtn" @click="btnid(506)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">507</label>
            <button type="submit" class="sbtn" @click="btnid(507)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">508</label>
            <button type="submit" class="sbtn" @click="btnid(508)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">509</label>
            <button type="submit" class="sbtn" @click="btnid(509)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">510</label>
            <button type="submit" class="sbtn" @click="btnid(510)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">511</label>
            <button type="submit" class="sbtn" @click="btnid(511)"></button>
          </div>
        </div>
      </div>

      <div class="row justify-content-start" style="margin-bottom: 10vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">512</label>
            <button type="submit" class="sbtn" @click="btnid(512)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">513</label>
            <button type="submit" class="sbtn" @click="btnid(513)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">514</label>
            <button type="submit" class="sbtn" @click="btnid(514)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">515</label>
            <button type="submit" class="sbtn" @click="btnid(515)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">516</label>
            <button type="submit" class="sbtn" @click="btnid(516)"></button>
          </div>
          <div class="col-1 sun">
            <label class="id">517</label>
            <button type="submit" class="sbtn" @click="btnid(517)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">518</label>
            <button type="submit" class="sbtn" @click="btnid(518)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">519</label>
            <button type="submit" class="sbtn" @click="btnid(519)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">520</label>
            <button type="submit" class="sbtn" @click="btnid(520)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">521</label>
            <button type="submit" class="sbtn" @click="btnid(521)"></button>
          </div>
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">522</label>
            <button type="submit" class="sbtn" @click="btnid(522)"></button>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-start"
        style="margin-bottom: 10vh; position: relative"
      ></div>
    </div>
  </div>
</template>

<script>
import OpenRegister from "@/components/OpenRegister.vue";
import Navigation from "@/components/Navigation.vue";
import maro from "@/views/MaroFamilyBeach.vue";
import { useRoute } from "vue-router";
export default {
  name: "MaroFamilyBeach",
  data() {
    return {
      // key: "",
    };
  },
  components: {
    OpenRegister,
    Navigation,
  },
  methods: {
    // parasol() {
    //   localStorage.setItem("id", JSON.stringify(this.key));
    //   console.log(localStorage);
    //   this.$router.push({ name: "payment" }); //kasnije promijeni
    // },

    btnid(buttonvalue) {
      let name = {
        name: maro.name,
        id: buttonvalue,
      };
      localStorage.setItem("id", JSON.stringify(name));

      this.$router.push({ name: "payment" });

      //kasnije promijeni
    },
  },
};
</script>
<style lang="scss">
.id {
  width: 10vh;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}
.sbtn:hover {
  animation: pulse 1s;
  transform: scale(1.5);
}
.sbtn {
  background-image: url("@/assets/suncobre.png");
  background-position: center;
  background-color: transparent;
  background-size: cover;
  cursor: pointer;
  border: none;
  width: 8vh;
  height: 8vh;
}
.sun {
  margin-left: auto;
  margin-right: auto;
  height: 8vh;
  width: 8vh;
}

.imgbk {
  background-image: url("@/assets/plaza.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  width: initial;
  margin: 2vh;
  align-content: center;
}
</style>
