// Function returns all unique characters that exist in a string.

function countLetters(string) {
  var letters = {}

  for (var i = 0; i < string.length; i++) {

    if (string[i] in letters) {
      letters[string[i]] = letters[string[i]] + 1;
    } else {
        if (string[i] != " ") {
          letters[string[i]] = 1;
        }
      }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));