const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
// TEST
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1, 2, 5, 4, 5]),[3]);