// Prompt the user to enter their age
let age = prompt("Please enter your age:");

// Convert the input to a number
age = Number(age);

// Check if the age is 18 or older
if (age >= 18) {
  // If age is 18 or older, display a message saying they are eligible to vote
  alert("You are eligible to vote.");
} else {
  // If age is less than 18, display a message saying they are not eligible to vote
  alert("You are not eligible to vote.");
}
