// Function returns all unique characters that exist in a string.

// - create an empty object
// - look at each letter in a given string (omit spaces)
// - evaluate whether that letter is unique
// - if the current letter is equal to an established key, increment the established key's value by 1
// - return a count of how many times each letter shows up
// - add everything to the empty object and print that info

function countCharacters(string) {
  var characters = {}

  for (var i = 0; i < string.length; i++) {
      characters[string[i]] = 1;
  }
  return characters;
}

console.log(countCharacters("test"));