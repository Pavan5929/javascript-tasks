let char = prompt("Please enter a character:").toLowerCase();
//Checking if the character is a vowel 
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  alert(char + " is a vowel.");
} else {
  alert(char + " is not a vowel.");
}
