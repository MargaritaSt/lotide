//const tail = require('../tail');
//const assertEqual = require('../assertEqual');
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 1 for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [Labs] for [Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs"]), ["Labs"]);
  });
});