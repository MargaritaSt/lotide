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

const head = function(actual) {
  return actual[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);