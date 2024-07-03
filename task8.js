let age = prompt("Please enter your age:");
age = Number(age);
// If the age is less than 13, display "You are a child". If the age is between 13 and 19, display "You are a teenager". If the age is 20 or above, display "You are an adult"
if (age < 13) {
  alert("You are a child.");
} else if (age >= 13 && age <= 19) {
  alert("You are a teenager.");
} else {
  alert("You are an adult.");
}
