// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var spec = ["~","!","@","#","$","%","^","&","*","(",")","-","+","=","?",",",">","<",";",":","}","{","]","["]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var ups = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var empty = []


generatePassword = function(){
var generatePasswordPrompt = window.prompt("How many characters for your password (min 8)?")
var generatePasswordPrompt = parseInt(generatePasswordPrompt)
console.log(generatePasswordPrompt);
if (!generatePasswordPrompt){
  return;
} else if(generatePasswordPrompt < 8){
  alert("Must be a number between 8 and 128");
  return;
}
  else if(generatePasswordPrompt > 128){
    alert("Must be a number between 8 and 128");
    return;
} 
  else if(isNaN(generatePasswordPrompt)){
  alert("Must be a number between 8 and 128");
  return;
} else{
  var lowerQuestion = window.confirm("Would you like lowercase letters included?");
  var upperQuestion = window.confirm("Would you like uppercase letters included?")
  var specialQuestion = window.confirm("Would you like special characters included?")
  var numberQuestion = window.confirm("Would you like numbers included?")
}

console.log(lowerQuestion)
console.log(upperQuestion)
console.log(specialQuestion)
console.log(numberQuestion)  
// ^^these were put here to see if the questions come back correctly with true/false

if(lowerQuestion===false && upperQuestion ===false && specialQuestion ===false && numberQuestion===false){
  alert("Password requires at least one of the groups to be used. Please try again.");
  return;
}

if (lowerQuestion == true) {
  var userChoice = low;
} else {
  var userChoice = empty }

if (upperQuestion == true) {
  var userChoice = userChoice.concat(ups);
} else {userChoice = userChoice}


if (specialQuestion == true) {
  var userChoice = userChoice.concat(spec);
} else {userChoice = userChoice}

if (numberQuestion == true) {
  var userChoice = userChoice.concat(numbers)
} else {userChoice = userChoice}
console.log(userChoice)
// ^^This console.log is put here to see if the value of userChoice is correct within the console.

var finalPass = [];

for (let i = 0; i < generatePasswordPrompt; i++) {
      random = Math.floor(Math.random() * (userChoice.length));
      finalPass = finalPass + userChoice[random];
      console.log(userChoice[random])
    
    }

return finalPass;

}

