let number = prompt("Please enter a number:");
number = Number(number);

if (number > 0) {
    //If the number is positive, display a message saying "The number is positive"
  alert("The number is positive.");
} else if (number < 0) {
    //If the number is negative, display a message saying "The number is negative"
  alert("The number is negative.");
} else {
    // If the number is zero, display a message saying "The number is zero"
  alert("The number is zero.");
}
