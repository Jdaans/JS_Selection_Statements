console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1

let favNumber = 7

let guessNumber = prompt("What is my favorite number?")

if (guessNumber == favNumber) {
  console.log("Congrats, that is correct")
} 
 else if (guessNumber > favNumber) {
  console.log("Sorry, that number is too high.")
} 
 else if (guessNumber < favNumber) {
  console.log("Sorry, that number is too low")
 }

 //Exercise 2

 let birthMonth = prompt("What is your birth month?")

 switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("winter")
    break;

  case "march":
  case "april":
  case "may":
    console.log("spring")
    break;

  case "june":
  case "july":
  case "august":
    console.log("summer")
    break;

  case "september":
  case "october":
  case "november":
    console.log("fall")
    break;
  default:
    console.log("I dont recognize that month")
 }

 //Exercise 3

 let typeId = "01";
 let colorId = "PU";
 let sizeId = "L";

 let type = "";
 let color = "";
 let size = "";

 switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long sleeve";
    break;
  case "04":
    type = "Sweat shirt";
    break;
  default:
  type = "other";
  break;
 }

 switch(colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "white";
  
 }

 switch(sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
 }

 console.log(`Product: ${size} ${color} ${type}`);


