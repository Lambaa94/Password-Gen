// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\",", "]", "^", "_", "`", "{", "}", "~", " "];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// var userChoices = [number, special, upperCase, lowerCase]





var randomNumb = number[Math.floor(Math.random() * number.length)];
var randomSpec = special[Math.floor(Math.random() * special.length)];
var randomUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
var randomLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];




function generatePassword(length, userChoices) {
  randomPass = "";
  // prompt length
  var length = parseInt(prompt("Pick a number between 8 and 128 for the length of your password."));
  while (length < 8 || length > 128) {
    alert("please choose a valid number");
    i--;
  }
  // userChoices
  // confirm the use of special characters
  var special = confirm("Do you want to use special characters?");
  // get a number
  // confirm the use of upperCase
  var upperCase = confirm("Do you want to use upper case?");
  // confirm the use of lowerCase
  var lowerCase = confirm("Do you want to use lower case?");
  // for (i = 0; i < length; i++)
    // take the value the user gives and the true confirms
    // and then randomly generate password up to the amount the user gives 
    // i == userNumber; 
    // alert if they didnt pick anything
    // var pass = "";
    var userChoices = {
      numberSpec: number.concat(special),

      numberUpper: number.concat(upperCase),

      numberLower: number.concat(lowerCase),

      specUpper: special.concat(upperCase),

      specLower: special.concat(lowerCase),

      upperLower: upperCase.concat(lowerCase),

      notNumber: special.concat(upperCase.lowerCase),

      notSpecial: number.concat(uppeCase.lowerCase),

      notUpper: number.concat(special.lowerCase),

      notLower: number.concat(special.upperCase),

      allTypes: number.concat(special.upperCase.lowerCase),
    }




}


















// return pass

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
