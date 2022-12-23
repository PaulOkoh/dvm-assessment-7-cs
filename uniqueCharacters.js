// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

 const hasUniqueChars = (str) => new Set(str).size === str.length

 console.log(hasUniqueChars("Monday"));
 console.log(hasUniqueChars("Moonday"));