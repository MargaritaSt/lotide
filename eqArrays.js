// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ((typeof actual) === 'string') {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);
    } else {
      console.log(`❌❌❌ Assertion Failed:  ${actual}  !==  ${expected}`);
    } 
  } else {    // for numbers
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
    } else  {
      console.log(`❌❌❌ Assertion Failed:  ${actual}  !==  ${expected}`);
    } 
  }
};

const eqArrays = function(array1, array2) {
  let match;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      match = true;
    } else {
      match = false;
      return match;
    }
  }
  return match;
}


// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);