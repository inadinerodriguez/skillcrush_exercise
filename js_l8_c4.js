let stuff = [
    "cars",
    "blankets",
    "sunflowers",
    "sky",
    "yellow",
    "code",
    "perfume",
    "coffee",
    "books"
  ];
  
  // Log out even index items
  stuff.forEach(function (item, index) {
    if (index % 2 === 0) {
      console.log(item);
    }
  });
  
  // Create function that will remove an element from an array
  const removeItem = function (array, item) {
    let index = array.indexOf(item);
    if (index === -1) {
      console.log(`Sorry no item in this array!`);
    } else {
      array.splice(index, 1);
      console.log(`Removing ${item}`);
    }
  };
  
  removeItem(stuff, "code");
  console.log(stuff);
  removeItem(stuff, "napkins");
  console.log(stuff);
  
  //Log out an array with all the elements from the stuff array that contains the letter "s". Use a for...of loop and filter().
  
  let letterSS = [];
  for (let item of stuff) {
    if (item.includes("s")) {
      letterSS.push(item);
    }
  }
  console.log(letterS);
  
  const letterS = stuff.filter(function (item) {
    return item.includes("s");
  });
  console.log(letterS);