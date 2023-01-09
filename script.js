// The Password generator will provide a password with 10-64  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
let numeredCharacters = [

 "0",
 "1", 
 "2",
 "3",
 "4", 
 "5", 
 "6", 
 "7", 
 "8", 
 "9"
];

let specialCharacters = [

  "!", 
  "%", 
  "&", 
  ",",
  "*",
  "+", 
  "-", 
  ".", 
  "/", 
  "<", 
  ">", 
  "?",
  "~"
];
let lowerCaseCharacters = [
  
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
  "z"
];
let upperCaseCharacters = [
  
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
  "Z"];

// Variable Declaration 
let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmUpperCase;
let confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function createPassword() {
  let confirmLength = (prompt(`How many characters should your password  contain?`));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 9 || confirmLength >= 65) {
      alert(`Password length must be between 10-64 characters Try again`);
      let confirmLength = (prompt(`How many characters should your password contain?`));
      } 

      // Repeat back how many characters the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine the parameters of password 
    let confirmSpecialCharacter = confirm(`Click OK to confirm if you would like to include special characters`);
    let confirmNumericCharacter = confirm(`Click OK to confirm if you would like to include numeric characters`);    
    let confirmLowerCase = confirm(`Click OK to confirm if you would like to include lowercase characters`);
    let confirmUpperCase = confirm(`Click OK to confirm if you would like to include uppercase characters`);
     
    // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert(`You must choose at least one parameter`);
        let confirmSpecialCharacter = confirm(`Click OK to confirm if you would like to include special characters`);
        let confirmNumericCharacter = confirm(`Click OK to confirm if you would like to include numeric characters`);    
        let confirmLowerCase = confirm(`Click OK to confirm if you would like to include lowercase characters`);
        let confirmUpperCase = confirm(`Click OK to confirm if you would like to include uppercase characters`);   
    } 

      // Assign an action to the password parameters 
      let passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numeredCharacters)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCaseCharacters)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCaseCharacters)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      let randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector(`#password`);

  passwordText.value = password;

}
