/// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};
/// countOnly
const countLetters = function(allItems) {
  const results = {};

  for (const item of allItems) {
    if (item !== ' ') { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1["i"], 2);