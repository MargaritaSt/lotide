// FUNCTION IMPLEMENTATION
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
};

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

const assertArrayEqual = function(array1,array2,expected) {
  let actual = eqArrays(array1,array2);
  assertEqual(actual, expected);
};

assertArrayEqual([1,2,4],[1,2,4],true);