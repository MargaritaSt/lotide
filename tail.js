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
  console.log(elements.length);
  for (let i = 1; i < elements.length; i++) {
    newArray.push(elements[i]);
  }
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!





// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);