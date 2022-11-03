const hobbies = [
    "travel",
    "hiking",
    "camping",
    "reading",
    "dancing",
    "painting"
  ];
  
  console.log(hobbies.length);
  
  hobbies.push("writing");
  console.log(hobbies[2]);
  //console.log(hobbies);
  hobbies.pop();
  hobbies.splice(2, 0, "laughing", "singing");
  console.log(hobbies.length);
  hobbies.shift();
  console.log(hobbies);
  
  const goals = ["hike macchu picchu", "master coding", "new awesome coding job"];
  const allTheThings = [...hobbies, ...goals];
  console.log(allTheThings);
  console.log(allTheThings.indexOf("master coding"));
  
  allTheThings.splice(8, 1);
  console.log(allTheThings);
  
  const plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}!`;
  });
  
  console.log(plans);
  