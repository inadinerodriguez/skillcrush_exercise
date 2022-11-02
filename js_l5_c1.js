// const button = document.querySelector(".show-cat");
// //console.log(button);
// const cat = document.querySelector(".cat");
// //console.log(cat);

// button.addEventListener("click", function () {
//   cat.classList.add("show");
// });


const button = document.querySelector(".show-cat");
//console.log(button);
const cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!!!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoooo, Cat!!!!!";
    button.classList.remove("disappear");
  }
});
