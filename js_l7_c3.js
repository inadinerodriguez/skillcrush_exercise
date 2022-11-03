// Press a number and reveal a surprise
// Link to check out: https://8bzrlh.csb.app/

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const button = document.querySelector("button");

document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "1") {
    box1.innerText = "🤪";
  } else if (key === "2") {
    box2.innerText = "💃";
  } else if (key === "3") {
    box3.innerText = "🥑";
  }
});

button.addEventListener("click", function () {
  box1.innerText = "1";
  box2.innerText = "2";
  box3.innerText = "3";
});
