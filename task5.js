// Prompt the user to enter their username
let username = prompt("Please enter your username:");

// Prompt the user to enter their password
let password = prompt("Please enter your password:");

// Check if the username is "admin" AND the password is "1234"
if (username === "admin" && password === "1234") {
  // If both conditions are true, display a welcome message
  alert("Welcome, admin!");
} else {
  // If either condition is false, display an error message
  alert("Error: Invalid username or password.");
}
