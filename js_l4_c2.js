const firstListItem = document.querySelector("ul li");
//console.log(firstListItem);
const moreReasons = document.querySelector(".more-reasons");
//console.log(moreReasons);
const whyJS = document.querySelector("h3");
//console.log(whyJS);

firstListItem.style.textTransform = "upperCase";
moreReasons.style.fontSize = "2.4em";
whyJS.innerHTML = 'Why <span class="highlight">JavaScript</span>?';
//console.log(whyJS);
const highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

const mainImage = document.querySelector("img");
console.log(mainImage);

mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";