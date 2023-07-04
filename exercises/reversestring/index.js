// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

//-- another way
// function reverse(str) {
//   let reversedStr = "";

//   for (let letter of str) {
//     reversedStr = letter + reversedStr;
//   }
//   return reversedStr;
// }

module.exports = reverse;
