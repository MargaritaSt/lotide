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

const takeUntil = function(array,callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      return results;
    }
    results.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[1, 2, 5, 7, 3]);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);