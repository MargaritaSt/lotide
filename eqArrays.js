// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let match;
  if (array1.length !== array2.length) {
    match = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        match = true;
      } else {
        match = false;
      }
    }
  }
  console.log(match);
  return match;
};
module.exports = eqArrays;