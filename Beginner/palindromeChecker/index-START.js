/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




// given a string return true/false if it is a palindrome


//Parameters is the input passed into the function.
//String

//Return the function output.
// true/false

//Examples
//bob=>true
//brittany=>false

//Psuedo Code outline of the function.
//variable
//boolean
//reverse method
//split
//join




//function, name, parameter
function palindrome (string){
  //declared variable reverse;split my string into an array, reversed the array, and I joined it back into a string.
    let reverse = string.split('').reverse().join('')
    //create a boolean to check if string or reverse are equal to each other or not
    if (string === reverse){
      return true
    }
  else {
    return false
  }
}


module.exports = palindromeChecker;
