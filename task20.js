/* Declare a variable with any value. Use typeof to check if the value is a string. If 
it is, concatenate another string to it and display the result using alert. Otherwise, display 
an alert saying "The value is not a string."
*/
var myVar = "Hello";

// Check if the value is a string using typeof
if (typeof myVar === 'string') {
    // Concatenate another string to it
    var result = myVar + " World";
    alert(result);
} else {
  
    alert("The value is not a string");
}
