import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Payment from "@/views/Payment.vue";

createApp(App).use(router).mount("#app");
createApp(Payment).use(Payment);

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = dd + "." + mm + "." + yyyy + ".";

//console.log(today);

//Datepicker
// document.getElementById("datum").innerHTML = today;
// $(document).ready(function () {
//   $(".datepicker").datepicker({
//     format: "dd-mm-yyyy",
//     autoclose: true,
//     inline: true,
//     startDate: "0d",
//   });

//   $(".cell").click(function () {
//     $(".cell").removeClass("select");
//     $(this).addClass("select");
//   });
// });

// Set the inner HTML of an element with ID "datum" to the current date

// Configure the datepicker widget
// $(document).ready(function () {
//   $(".datepicker").datepicker({
//     format: "dd-mm-yyyy",

//     autoclose: true,
//     inline: false,
//     startDate: "0d",
//   });
//   $(".datepicker").on("change", function () {
//     let selected = $(this).val();
//   });
// });

// // Add a click event listener to cells with class "cell"
// let cells = document.querySelectorAll(".cell");
// cells.forEach(function (cell) {
//   cell.addEventListener("click", function () {
//     cells.forEach(function (c) {
//       c.classList.remove("select");
//     });
//     this.classList.add("select");
//   });
// });

//document.getElementById("myButton").innerHTML = router.push("/reverolbeach");

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

//Payment method
/*
document.getElementById("cashbtn").onclick = function () {
  let x = document.getElementById("gname");
  console.log(x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};*/
