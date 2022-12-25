// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

const addToZero = (array) => {
  for(let i = 0; i<array.length; i++){
    for(let j = 0; j<array.length; j++){
      if(array[i] + array[j] === 0) {
        return true
      }
    }
  }
  return false
}

//O(n^2) runtime ************
//space complexity  O(n) ****
console.log(addToZero([1]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
console.log(addToZero([1, 2, 3, -2, -5, 5]))

