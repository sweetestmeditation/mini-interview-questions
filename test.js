const findKLargest = require('./findKLargest');

// Sample input array
const array = [5, 16, 7, 9, -1, 4, 3, 11, 2];
// Value of k
const k = 3;

// Call the findKLargest function
const result = findKLargest(array, k);

// Print the result
console.log(`The ${k} largest values in the array are:`, result);
