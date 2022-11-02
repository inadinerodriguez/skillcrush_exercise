// Budget Your Vaca calculator 

const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");

const tripInfo = function () {
  let totalBudget = Number(prompt("What's your total budget??"));
  let accomodation = Number(prompt("What are your accomodation costs?"));
  let numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accomodation, numDays);
};

const calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  let daily = ((totalBudget - accomodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!!`;
};

tripInfoButton.addEventListener("click", function () {
  tripInfo();
});

// URl to check it out: https://wrdngh.csb.app/