const button = document.querySelector(".got-this");
const modal = document.querySelector(".modal");
const modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've Got This!!!";
});

modalX.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's Got This??";
});