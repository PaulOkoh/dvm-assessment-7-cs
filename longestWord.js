// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

//sort array by length, longest word is now in index[0]
const findLongestWord = (array) => array.sort((a,b) => ( b.length - a.length))[0].length
console.log(findLongestWord(["hi", "hello"]));
