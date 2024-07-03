var userInput = prompt("Please enter a number:");

// Convert the user input to a number
var number = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Multiply the number by 10
    var result = number * 10;
   
    alert("The result of multiplying " + number + " by 10 is: " + result);
    
} else {
    
    alert("Invalid input. Please enter a valid number.");
}