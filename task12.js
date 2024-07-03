let year = prompt("Please enter a year:");
year = Number(year);
//Checking if the year is a leap year and display
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  alert(year + " is a leap year.");
} else {
  alert(year + " is not a leap year.");
}
