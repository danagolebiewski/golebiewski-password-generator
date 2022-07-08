var generateBtn = document.querySelector("#generate");
const lowerCaseArray = [
  "a", "b", "c", "d", "e", "f", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
const upperCaseArray = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
const numbersArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]
const symbolsArray = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"
]
let password = [
]
let passwordArray = [
]

function generatePassword() {
  var characterLength = prompt("How many characters would you like in your password?");
  console.log(characterLength);

  if (characterLength > 7 && characterLength < 129) {
    var upperCase = confirm("Would you like to add upper case characters?");
    console.log(upperCase);
    var lowerCase = confirm("Would you like to add lower case characters?");
    console.log(lowerCase);
    var numbers = confirm("Would you like to add numbers?");
    console.log(numbers);
    var specialCharacters = confirm("Would you like to add special characters?");
    console.log(specialCharacters);
    if (upperCase === true) {
      passwordArray = passwordArray.concat(upperCaseArray)
    }
    if (lowerCase === true) {
      passwordArray = passwordArray.concat(lowerCaseArray)
    }

    if (numbers === true) {
      passwordArray = passwordArray.concat(numbersArray)
    }
    if (specialCharacters === true) {
      passwordArray = passwordArray.concat(symbolsArray)
    }
    for (let index = 0; index < characterLength; index++) {
      password.push(passwordArray[Math.floor(Math.random() * passwordArray.length)])
    }

  } else {
    alert("Must choose a number between 8 and 128")
  }

  return password
}
function writePassword() {
  var passwordDisplay = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordDisplay;
  password = []
}

generateBtn.addEventListener("click", writePassword);
