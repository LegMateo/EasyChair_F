<template>
  <div class="container-fluid" style="margin-left: auto; margin-right: auto">
    <div class="row">
      <div class="col-10 body-main">
        <div class="row">
          <div class="col-12 header">
            <img
              class="img"
              alt="Invoce Template"
              src="@/assets/logo_beach.png"
            />
          </div>

          <div class="col-12 header">
            <h1><strong>EasyChairPayment</strong></h1>
          </div>
        </div>
        <br />

        <div class="col-12 header">
          <h2>INVOICE</h2>
          <h5>{{ this.id }}</h5>
        </div>

        <br />
        <div class="container-fluid" v-if="cards">
          <div class="row">
            <div class="col-6 desc">
              <h3>Description</h3>
              <hr class="hr-lines" />
              <h6>Begin - End</h6>
              <hr class="hr-lines" />
              <h6>Parasol no {{ cards.parasol }}</h6>

              <hr class="hr-lines" />
              <h6>Days total</h6>

              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>

              <hr class="hr-lines" />
              <div v-if="cards.one != 0">
                <h6>One day reservation</h6>
                <hr class="hr-lines" />
              </div>

              <div v-if="cards.three != 0">
                <h6>Three days reservation</h6>
                <hr class="hr-lines" />
              </div>

              <div v-if="cards.seven != 0">
                <h6>Seven days reservation</h6>
                <hr class="hr-lines" />
              </div>

              <div>
                <h6>Chairs</h6>
                <hr class="hr-lines" />
              </div>

              <div v-if="cards.extraChairs != 0">
                <h6>Additional chairs</h6>
                <hr class="hr-lines" />
              </div>

              <div v-if="cards.cash == false">
                <div
                  style="border-bottom: 1px solid #333; margin-bottom: 16px"
                ></div>

                <h6>Guest Name</h6>
                <hr class="hr-lines" />
                <h6>Guest Surname</h6>
                <hr class="hr-lines" />
                <h6>Room Number</h6>
              </div>

              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>

              <p><strong>Payment method:</strong></p>

              <p><strong>Reservation amount: </strong></p>
              <div v-if="cards.extraChairs != 0">
                <p><strong>Chairs amount: </strong></p>
              </div>

              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>

              <h4><strong style="color: #f81d2d">Total:</strong></h4>

              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>
            </div>

            <div class="col-6 amo">
              <h3>Info</h3>
              <hr class="hr-lines" />
              <h6>{{ cards.dateBegin }} - {{ cards.dateEnd }}</h6>

              <hr class="hr-lines" />

              <h6>1</h6>
              <hr class="hr-lines" />

              <h6>{{ cards.days }}</h6>

              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>
              <hr class="hr-lines" />
              <div v-if="cards.one != 0">
                <h6>{{ cards.one }} x 10€</h6>
                <hr class="hr-lines" />
              </div>
              <div v-if="cards.three != 0">
                <h6>{{ cards.three }} x 20€</h6>
                <hr class="hr-lines" />
              </div>
              <div v-if="cards.seven != 0">
                <h6>{{ cards.seven }} x 35€</h6>
                <hr class="hr-lines" />
              </div>

              <div>
                <h6>{{ cards.chairs }} x FREE</h6>
                <hr class="hr-lines" />
              </div>

              <div v-if="cards.extraChairs != 0">
                <h6>{{ cards.extraChairs }} x 5€</h6>
                <hr class="hr-lines" />
              </div>

              <div v-if="cards.cash == false">
                <div
                  style="border-bottom: 1px solid #333; margin-bottom: 16px"
                ></div>

                <h6>{{ cards.gname }}</h6>
                <hr class="hr-lines" />
                <h6>{{ cards.gsurname }}</h6>
                <hr class="hr-lines" />
                <h6>{{ cards.roomnb }}</h6>
              </div>
              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>

              <p v-if="cards.cash == false">
                <strong> ROOM </strong>
              </p>

              <p v-if="cards.cash == true">
                <strong> CASH </strong>
              </p>
              <p>
                <strong>
                  {{
                    cards.three * 20 + cards.one * 10 + cards.seven * 35
                  }}€</strong
                >
              </p>
              <div v-if="cards.extraChairs != 0">
                <p>
                  <strong> {{ cards.extraChairs * 5 }}€</strong>
                </p>
              </div>
              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>

              <h4>
                <strong style="color: #f81d2d"> {{ cards.total }}€ </strong>
              </h4>
              <div
                style="border-bottom: 1px solid #333; margin-bottom: 16px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="col-md-12" v-if="cards">
        <p><b>Beach:</b> {{ cards.beach }}</p>
        <p><b>Cashier :</b> {{ cards.cashier }}</p>
        <p><b>Date :</b> {{ cards.dateBegin }}, {{ cards.time }}</p>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { Payment } from "@/services/index.js";

let data = {};
export default {
  props: ["id"],
  data() {
    return {
      cards: null,
    };
  },

  // async onMounted() {
  //   console.log("kolakda");
  //   console.log(this.id);
  //   this.cards = await Posts.getOne(this.id);
  // },
  mounted: async function () {
    console.log(this.id);
    this.cards = await Payment.getOne(this.id);

    data = this.cards;
    console.log(data.cashier);

    // let data = Posts.getOne.data;
  },
  name: "invoice",
};
</script>
<style>
.body-main {
  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
}

.main thead {
  background: #1e1f23;
  color: #fff;
}
.img {
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 230px;
}
h1 {
  text-align: center;
}

.header {
  align-self: center;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

h6 {
  margin-right: auto;
  margin-left: auto;
}

h3 {
  padding-bottom: 3vh;
}

.hr-lines {
  margin-top: 1vh;
  min-width: 100%;
  margin: 16px auto;
}

.amo {
  position: static;
  padding: 0%;
  margin-right: auto;
  text-align: center;
}

.desc {
  position: static;
  padding: 0%;
  align-self: left;
  margin-right: auto;
}
</style>
