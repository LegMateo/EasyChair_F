<template>
  <div class="container-fluid" v-if="!$route.meta.hideNavbar">
    <div class="row justify-content-md-center">
      <div class="col col-lg-2">
        <nav
          @click="clickPrev(this.routs)"
          aria-label="Page navigation example"
          id="Prev"
        >
          <ul class="pagination">
            <li class="page-item">
              <a href="#" aria-label="Previous">
                <span class="arrowL"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col" style="align-self: center">
        <span id="pagename"></span>
        <h1>{{ beach }}</h1>
      </div>
      <div class="col col-lg-2">
        <nav
          @click="clickNext(this.routs)"
          id="Next"
          aria-label="Page navigation example"
          style="align-self: flex-end; float: right"
        >
          <ul class="pagination">
            <li class="page-item">
              <a href="#" class="next round" aria-label="Previous">
                <span class="arrowR"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
.arrowR {
  cursor: pointer;
  position: relative;
  display: block;

  width: 60px;
  height: 60px;
  border: solid 6px #999;
  border-radius: 100%;
  z-index: -1;
  transition: all 0.2s linear;
}
.arrowL {
  cursor: pointer;
  position: relative;
  display: block;

  width: 60px;
  height: 60px;
  border: solid 6px #999;
  border-radius: 100%;
  z-index: -1;
  transition: all 0.2s linear;
}
.arrowR:before,
.arrowR:after {
  content: "";
  position: absolute;
  width: 35%;
  height: 10%;
  top: 41%;
  left: 55%;
  background: #999 !important;
  z-index: inherit;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: all 0.2s linear;
}
.arrowR:after {
  z-index: inherit;
  top: 59%;
  left: 55%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.arrowR:hover {
  border: solid 8px #777;
}
.arrowR:hover::after,
.arrowR:hover::before {
  background: #777;
}
.arrowR:active {
  border: solid 8px #111;
}
.arrowR:active,
.arrowR:active:before {
  background: white;
}

.arrowL:before,
.arrowL:after {
  content: "";
  position: absolute;
  width: 35%;
  height: 10%;
  top: 31%;
  left: 38%;
  background: #999 !important;
  z-index: inherit;
  transform: translate(-50%, 50%) rotate(-45deg);
  transition: all 0.2s linear;
}
.arrowL:after {
  z-index: inherit;
  top: 50%;
  left: 38%;
  transform: translate(-50%, 50%) rotate(45deg);
}
.arrowL:hover {
  border: solid 8px #777;
}
.arrowL:hover::after,
.arrowL:hover::before {
  background: #777;
}
.arrowL:active {
  border: solid 8px #111;
}
.arrowL:active,
.arrowL:active:before {
  background: white;
}
</style>

<script>
import router from "@/router";
export default {
  props: ["beach"],
  name: "Navigation",

  data() {
    return {
      routs: [
        "/maro",
        "/reverolbeach",
        "/sunsetbeach",
        "/marinabeach",
        "/surfmaniabeach",
      ],
      current: "",
    };
  },

  methods: {
    clickPrev(routs) {
      let currentLocation = window.location.pathname;
      //console.log(currentLocation);
      for (let i in routs) {
        if (routs[i] === currentLocation) {
          this.current = i;
        }
      }
      for (let i in routs) {
        if (i === this.current) {
          i++;
          if (i > 4) {
            this.current = 0;
            i = 0;
          }
          router.push(routs[i]);
          this.current = i;
          // console.log(this.current);
        }
      }
    },

    clickNext(routs) {
      let currentLocation = window.location.pathname;
      for (let i in routs) {
        if (routs[i] === currentLocation) {
          this.current = i;
          // console.log(this.current);
          if (this.current == 0) {
            this.current = 4;
            i = 4;
          } else i--;
          //  console.log(i);
          router.push(routs[i]);

          this.current = i;
          // console.log(this.current);
        }
      }
    },
  },
};
</script>
