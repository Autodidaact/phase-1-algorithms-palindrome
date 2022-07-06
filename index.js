function isPalindrome(word) {
  // Write your algorithm 
  /* 
  convert the input word an array and use the reverse method to reverse it
  convert it back to string and assign it to a new variable
  if new variable = input word
    then return true
  else
      then return false

*/
const wordArray = word.split("");
const reverseArray = wordArray.reverse();
const convertedWord = reverseArray.join("")
if (word === convertedWord){
  return true;
}else{
  return false;
}
 




}

/* 
  Add your pseudocode here
*/ 
/* 
  make a copy of the input string
  convert it a an array and the reverse method the reverse it
  convert it back to string and assing it to a new variable
  if new variable = input string
    then return true
  else
      then return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("sad"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


