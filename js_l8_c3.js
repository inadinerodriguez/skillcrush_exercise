const groceries = [
    "milk",
    "coffee",
    "oranges",
    "yogourt",
    "bread",
    "juice",
    "lettuce",
    "flour",
    "apples",
    "milk",
    "cat food",
    "juice",
    "ice cream",
    "potatoes",
    "bananas",
    "coffee",
    "olive oil",
    "mustard"
  ];
  console.log(groceries.length);
  
  const deleteDuplicates = function (list) {
    let cleanList = [];
  
    for (let item of list) {
      if (!cleanList.includes(item)) {
        cleanList.push(item);
      }
    }
    return cleanList;
  };
  
  const newGroceries = deleteDuplicates(groceries);
  console.log(newGroceries.length);
  
  newGroceries.forEach(function (food, index) {
    console.log(`#${index + 1} ${food}`.toUpperCase());
  });
  