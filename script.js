// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function generatePassword() {
  listOfChar = []
  // prompt length
  
  var length = parseInt(prompt("Pick a number between 8 and 128 for the length of your password."));
  while (length < 8 || length > 128) {
    alert("please choose a valid number");
    var length = parseInt(prompt("Pick a number between 8 and 128 for the length of your password."));
  }

  // confirm the use of numbers
   var hasNumb = confirm("Do you want to use numbers?");
  if (hasNumb === true) { listOfChar = listOfChar.concat(number) };
 
  // confirm the use of special characters
  var hasSpecial = confirm("Do you want to use special characters?");
  if (hasSpecial === true) { listOfChar = listOfChar.concat(special) };

  // confirm the use of upperCase
  var hasUpperCase = confirm("Do you want to use upper case?");
  if (hasUpperCase === true) { listOfChar = listOfChar.concat(upperCase) };

  // confirm the use of lowerCase
  var hasLowerCase = confirm("Do you want to use lower case?");
  if (hasLowerCase === true) { listOfChar = listOfChar.concat(lowerCase) }; 
  
  if (!hasLowerCase && !hasUpperCase && !hasSpecial && !hasNumb) {
    alert("You need to select at least one character");
    location.reload();
  
    
  }
  

  // take the value the user gives and the true confirms
  // and then randomly generate password up to the amount the user gives 



  var randomPass = ""
  for (var i = 0; i < length; i++) {
    randomPass += listOfChar[Math.floor(Math.random() * listOfChar.length)];

  }



  return randomPass;

}
// alert if they didnt pick anything


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
