/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

/* Paramaters are that I need a an arry and im going need to loop through the input to check how many vowels are inside the array

Results  I want to return a count of how mnay vowels are in the input

Examples if (AEjchsEe) Then I would get a count of 4 vowels

Pseudo Code I would declare the vowels and loop through the inpout while returning the amount of times the array spits out a vowel

*/

function vowelsCounter(input) {
    let vowelsCount = 0;
    let inputLetters = input.toLowerCase().split("");

    const vowels = ["a","e","i","o","u"];

    vowels.forEach(function(vowel) {
      inputLetters.forEach(function(inpLetter) {
        if (inpLetter === vowel) {
          vowelsCount++;
        }
      });
    });

    return vowelsCount;
  }


module.exports = vowelsCounter;
