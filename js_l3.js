var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here
//console.log(weekday);
if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky Work work work!");
} else if (weekday === "Wednesday") {
  console.log("Happy Humpday getta going!!!");
} else if (weekday === "Thursday") {
  console.log("Almost there!!! Have a drink");
} else if (weekday === "Friday") {
  console.log("Weekends almost here!!");
} else {
  console.log("Weekend!!!!");
}
