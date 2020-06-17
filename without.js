const without = function(initialArray, arrayWithout) {
  let finalArray = [];
  for (let i = 0; i < initialArray.length; i++) {
    finalArray.push(initialArray[i]);
  }
  
  for (let i = 0; i < arrayWithout.length; i++) {
    for (let a = 0; a < initialArray.length; a++) {
      if (arrayWithout[i] === initialArray[a]) {
        finalArray.splice(a,1);
      }
    }
  }
  console.log(finalArray);
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
        return match;
      }
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

const assertArraysEqual = function(arrayInitial, arrayExpected) {
  let actual = eqArrays(arrayInitial,arrayExpected);
  assertEqual(actual, true);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello","world","lighthouse"]);