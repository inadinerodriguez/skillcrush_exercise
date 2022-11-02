const footer = document.querySelector("footer");
//console.log(footer);

footer.style.backgroundColor = "#d7ddf3";

const h2 = document.querySelector("h2");
//console.log(h2);
h2.innerText = "Roses really smell like poopoo!";

const address = document.querySelector("address");
//console.log(address);

address.style.lineHeight = "1.5em";

const contact = document.querySelector(".contact h3");
//console.log(contact);
contact.innerHTML = "We're here for you <em>every day</em> of the week.";

const igIcon = document.querySelector(".fa-instagram");
//console.log(igIcon);
igIcon.style.color = "#d45bb9";

const fbIcon = document.querySelector(".fa-facebook");
//console.log(fbIcon);
fbIcon.style.color = "#6a99b5";

const hours = document.querySelector(".contact p");
//console.log(hours);
hours.style.border = "1px solid #d45bb9";
hours.style.padding = "1em";


// Change Instagram icon color
var instagram = document.querySelector(".fa-instagram");
instagram.style.color = "tomato";

// Add background image
var foodImage = document.querySelector(".food");
//console.log(foodImage);
foodImage.style.backgroundImage = "url('../img/victoria-shes-unsplash.jpg')";

// Dotted border-bottom around h1
var noms = document.querySelector("h1");
noms.style.borderBottom = "4px dotted tomato";
