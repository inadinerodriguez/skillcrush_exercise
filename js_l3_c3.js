let string12 = "12";
let num12 = 12;

if (string12 === num12) {
  console.log("hey hey hey, that's right");
} else {
  console.log("doesn't look like it!");
}

//Write a program that will ask users how many hours they slept last night
//and then provide helpful advice for their sleeping habits.

let sleep = Number(prompt("How many of hours of sleep did you get?"));

if (sleep > 12) {
  console.log("Wow really?? How about you tell me the truth ;)");
} else if (sleep >= 8) {
  console.log("Nice!!! That's the way to stay healthy!");
} else if (sleep >= 5) {
  console.log("It's a start, but work on aiming for higher");
} else {
  console.log("You need wayyyy more sleep!!!");
}

//Write a program that asks the user how many pieces of chocolate they’d like.

let howMuchChocolate = Number(
  prompt("How many pieces of chocolate would you like to eat?? 1-10 pieces??")
);
let chocolateLeft = 10 - howMuchChocolate;

if (chocolateLeft >= 8) {
  alert(`There are ${chocolateLeft} pieces of chocolate remaining`);
} else if (chocolateLeft >= 5) {
  alert(`There are ${chocolateLeft} left. It's getting low.`);
} else if (chocolateLeft >= 1) {
  alert(
    `There's ${chocolateLeft} pieces left. Better snatch it up before I stock up`
  );
} else {
  alert("Sorry there are non left. Better luck next time.");
}
