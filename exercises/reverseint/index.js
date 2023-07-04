// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversedN = n.toString().split("").reverse().join("");
  // if (n < 0) {
  //   reversedN = parseInt(reversedN) * -1;
  // }

  //Math.sign(n) return 1 if number positive, and -1 if number negative

  return parseInt(reversedN) * Math.sign(n);
}

module.exports = reverseInt;
