/* Create a prompt to ask the user's name. If the name is empty, display an alert 
saying "Name cannot be empty." Otherwise, display an alert with the message "Hello, 
[name]!"
*/

// Prompt the user to enter their name
var name = prompt("What is your name?");

// Check if the name is empty 
if (name && name.trim() !== '') {
    // Display a personalized greeting with the user's name
    alert("Hello, " + name + "!");
} else {
    // Display an alert indicating that the name cannot be empty
    alert("Name cannot be empty.");
}
