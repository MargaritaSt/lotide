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
        return match;
      }
    }
  }
  return match;
};

//eqObjects
const eqObjects = function(object1, object2) {
  let result;
  let keysObject1 = (Object.keys(object1));
  let keysObject2 = (Object.keys(object2));
  if (keysObject1.length !== keysObject2.length) {
    result = false;
  } else {
    for (let i = 0; i < keysObject1.length; i++) {
      if (typeof (object1[keysObject1[i]]) === 'object') {
        result = eqArrays(object1[keysObject1[i]],object2[keysObject1[i]]);
        if (result === false) return result;
      } else {
        if (object1[keysObject1[i]] === object2[keysObject1[i]]) {
          result = true;
        } else {
          result = false;
          return result;
        }
      }
    }
  }
  return result;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3,4] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), true);