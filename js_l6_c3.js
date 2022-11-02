const shoutIt = function (name) {
    let shout = `Hello ${name}, nice to meet you!`.toUpperCase();
    return shout;
  };
  
  console.log(shoutIt("monica"));
  console.log(shoutIt("penny"));
  console.log(shoutIt("coco"));
  
  const multiply = function (num1, num2) {
    if (typeof num1 !== "number") {
      return "You need to provide two numbers.";
    } else if (typeof num2 !== "number") {
      return "You need to provide two numbers";
    }
    return num1 * num2;
  };
  
  console.log(multiply(5, 10));
  console.log(multiply(2.4, 5.6));
  console.log(multiply(4, "eleven"));
  console.log(multiply("twelve,", 15));
  