var time = new Date().getHours();

//console.log(time);
// Your conditional statements here
let greeting = "Hey there";
let firstName = "Luna";

if (time <= 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good Afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}

alert(`${greeting}, ${firstName}`);