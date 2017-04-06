// Function returns all the indices in a string.
// I think output will look like this:
// { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [5, 19], u: [6, 20], s: [7, 21], e: [8, 22], n: [9] }

function countLetters(string) {
  var letterPositions = {};

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];

    if (letter in letterPositions) {
      letterPositions[letter].push(i);
    } else {
        if (letter != " ") {
          letterPositions[letter] = [i];
        }
      }
  }
  return letterPositions;
}

console.log(countLetters("lighthouse in the house"));