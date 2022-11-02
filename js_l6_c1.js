const startMyDay = function () {
    return "Meditate, workout and coffee!!!!";
  };
  
  console.log(startMyDay());
  
  const favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}!`;
  };
  
  console.log(favoriteCookie("Oatmeal Raisin"));
  
  const introduce = function (name, occupation) {
    return `You name is ${name} and you're a ${occupation}.`;
  };
  
  console.log(introduce("mikey", "speed racer"));
  console.log(introduce("sally", "dentist"));
  
  const hydrationFeedback = function () {
    let numGlasses = Number(
      prompt("How many glasses of water did you have today?")
    );
    if (numGlasses >= 8) {
      console.log("Congrats you're hydrated!!!");
    } else {
      console.log("Not bad, but let's try for some more water tomorrow.");
    }
  };
  
  hydrationFeedback();
  