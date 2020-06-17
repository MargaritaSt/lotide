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
 
const assertArraysEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);
  if (actual === true) {
    console.log(`✅✅✅ Assertion Passed:  ${array1}  ===  ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:  ${array1}  !==  ${array2}`);
  }

};

const words = ["hello","world","lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello","world","lighthouse"]);