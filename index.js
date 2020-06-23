// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const letterPosition = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  map,
  letterPosition,
  findKeyByValue,
  findKey,
  eqObjects,
  eqArrays,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual,
  without,
  takeUntil
};