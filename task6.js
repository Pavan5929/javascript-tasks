// Prompt the user to enter a temperature in Celsius
let celsius = prompt("Please enter the temperature in Celsius:");

// Convert the input to a number
celsius = Number(celsius);

// Convert the Celsius temperature to Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Display the result of the conversion using alert
alert(celsius + "°C is equal to " + fahrenheit + "°F");
