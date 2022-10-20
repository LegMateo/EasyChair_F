import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = dd + "." + mm + "." + yyyy + ".";

//console.log(today);

document.getElementById("datum").innerHTML = today;

//document.getElementById("myButton").innerHTML = router.push("/reverolbeach");

let imena = [
  "Maro Family Beach",
  "Reverol Beach",
  "Sunset Beach",
  "Marina Beach",
  "Surfmania Beach",
];

let routs = [
  "/",
  "/reverolbeach",
  "/sunsetbeach",
  "/marinabeach",
  "/surfmaniabeach",
];
/*
let calculate = (arr1, arr2) => {
  let cur = window.location.pathname;
  console.log(cur);
  for (let i in arr1) {
    if (arr1[i] === cur) {
      cur = i;
      console.log(cur);
    }
  }

  for (let i in arr2) {
    if (i == cur) {
      i = cur;
      console.log(arr2[1]);
      return arr2[i];
    }

    //console.log(cur);
  }
};

document.getElementById("pagename").innerText = calculate(routs, imena);*/

let current;

document.getElementById("Prev").onclick = function () {
  let currentLocation = window.location.pathname;
  //console.log(currentLocation);
  for (let i in routs) {
    if (routs[i] === currentLocation) {
      current = i;
    }
  }
  for (let i in routs) {
    if (i === current) {
      i++;
      if (i > 4) {
        current = 0;
        i = 0;
      }
      router.push(routs[i]);
      current = i;
      // console.log(current);
    }
  }
};

document.getElementById("Next").onclick = function () {
  let currentLocation = window.location.pathname;
  for (let i in routs) {
    if (routs[i] === currentLocation) {
      current = i;
      // console.log(current);
      if (current == 0) {
        current = 4;
        i = 4;
      } else i--;
      //  console.log(i);
      router.push(routs[i]);

      current = i;
      // console.log(current);
    }
  }
};
