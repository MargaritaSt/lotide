// FUNCTION IMPLEMENTATION
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
        return match;
      }
    }
  }
  return match;
};

const assertArraysEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);
  if (actual === true) {
    console.log(`✅✅✅ Assertion Passed:  ${array1}  ===  ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:  ${array1}  !==  ${array2}`);
  }

};

const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
const expected = ["g", "c", "t", "m", "r"];
assertArraysEqual(results1,expected);