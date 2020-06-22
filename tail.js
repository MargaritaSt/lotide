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

const tail = function(elements) {
  let newArray = [];
  for (let i = 1; i < elements.length; i++) {
    newArray.push(elements[i]);
  }
  return newArray;
};
module.exports = tail;