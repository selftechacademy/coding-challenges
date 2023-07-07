// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//NOTE:This solution will be also good for questions like?
/*
1. What is the most common character in the string
2. Does String A has same characters as B?
3.Does that character have any repeated characters in it?


*/

function maxChar(str) {
  const charObj = {};
  let maxCount = 0;
  let maxLetter = "";
  // lets loop thru the string, and save it into charObj
  for (let eachLetter of str) {
    if (charObj[eachLetter]) {
      charObj[eachLetter] = charObj[eachLetter] + 1;
    } else {
      charObj[eachLetter] = 1;
    }
  }
  //We have to loop thru the object
  for (let objKey in charObj) {
    if (charObj[objKey] > maxCount) {
      maxCount = charObj[objKey];
      maxLetter = objKey;
    }
  }

  return maxLetter;
}

/*
 1st loop  if(1 > 0) 
 maxCount = 1 
 maxLetter = h
 */

/*
 2nd loop  if(1 > 1) skip this step
 */

/*
 3rd loop  if(2 > 1) 
 maxCount = 2 
 maxLetter = p
 */

/*
 4th loop  if(1 > 2) skip this step
 */

module.exports = maxChar;
