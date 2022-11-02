const fans = document.querySelector(".fans");
const fish = document.querySelector(".fish");
const pets = document.querySelector(".pets");
const span = document.querySelector("span");

span.addEventListener("mouseover", function () {
  fans.innerText = "123K";
  fish.innerText = "47K";
  pets.innerText = "20K";
});

const toggle = document.getElementById("toggle");
const ball = document.querySelector(".ball");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
