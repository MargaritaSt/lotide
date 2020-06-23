// actual function
const middle = function(array) {
  let newArray = [];
  let length  = array.length;
  if (length !== 1 && length !== 2) {
    if (array.length % 2 === 0) {
      newArray.push(array[(length / 2) - 1]);
      newArray.push(array[length / 2]);
    } else {
      let index = Math.floor(length / 2);
      newArray.push(array[index]);
    }
  }
  return newArray;
};
module.exports = middle;