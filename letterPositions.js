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
//LetterPositions
const assertArraysEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);
  if (actual === true) {
    console.log(`✅✅✅ Assertion Passed:  ${array1}  ===  ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:  ${array1}  !==  ${array2}`);
  }

};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];  
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

//test
console.log(letterPositions('ttello'));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [1]);
assertArraysEqual(letterPositions("hello").h, [5]);
