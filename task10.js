let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
//display the largest of the three number
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

if (num1 >= num2 && num1 >= num3) {
  alert("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  alert("The largest number is: " + num2);
} else {
  alert("The largest number is: " + num3);
}
