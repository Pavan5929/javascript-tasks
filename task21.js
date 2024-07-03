/*Create a prompt to ask the user's favorite number. Check if the number is even or 
odd using the modulus operator. Display an alert with the message "The number is even" 
or "The number is odd."*/

// Prompt the user to enter their favorite number
var favoriteNumber = prompt("What is your favorite number?");

// Converting input to a number (since prompt returns a string)
favoriteNumber = parseInt(favoriteNumber);

// Check if the number is even or odd using the modulus operator
if (favoriteNumber % 2 === 0) {
    // If the remainder is 0, the number is even
    alert("The number is even.");
} else {
    // If the remainder is not 0, the number is odd
    alert("The number is odd.");
}
