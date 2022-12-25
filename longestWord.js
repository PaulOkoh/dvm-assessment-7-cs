// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

//sort array elements by length, longest word is now in index[0]
const findLongestWord = (array) => array.sort((a,b) => ( b.length - a.length))[0].length

//O(nlogn) runtime****
//space complexity O(1)
console.log(findLongestWord(["hi", "hello"]));
