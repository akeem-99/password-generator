var characterLength = 8;
var choiceArray = [];

let numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbolsList = ["!", "@", "£", "$", "%", "^", "*", "(", ")", "?", "-", "_"];
let lowercaseList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let uppercaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "O",
  "P",
  "Q",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.lenghth);
    password = password + choiceArr[randomIndex];
  }

  return password;
}
function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(
    prompt(
      "How many characters would you Like your password to be? Please enter a value between 8 and 128."
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a valid character, 8 - 128 digits.");
    return false;
  }
  if (confirm("Would you like to use lowercase letters")) {
    choiceArr = choiceArr.concat(lowercaseList);
  }
  if (confirm("would you like to use uppercase letters?")) {
    choiceArr = choiceArr.concat(uppercaseList);
  }
  if (confirm("would you like to use symbols?")) {
    choiceArr = choiceArr.concat(symbolsList);
  }
  if (confirm("would you like to use numbers?")) {
    choiceArr = choiceArr.concat(numbersList);
  }
  return true;
}
