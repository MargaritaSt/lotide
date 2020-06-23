const tail = function(elements) {
  let newArray = [];
  for (let i = 1; i < elements.length; i++) {
    newArray.push(elements[i]);
  }
  return newArray;
};
module.exports = tail;