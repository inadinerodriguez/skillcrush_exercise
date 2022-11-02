const title = document.querySelector("h1");

title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!!!";
  title.style.color = "maroon";
});

// const darkModeButton = document.querySelector(".dark-mode");
// const body = document.querySelector("body");

// darkModeButton.addEventListener("click", function () {
//   body.classList.add("dark-palette");
// });

// const lightModeButton = document.querySelector(".light-mode");

// lightModeButton.addEventListener("click", function () {
//   body.classList.remove("dark-palette");
// });

const darkModeButton = document.querySelector(".dark-mode");
const theme = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});
