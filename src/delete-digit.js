const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("");
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(arr[i]);
    if (index > -1) {
      const newElement = arr
        .slice(0, index)
        .concat(arr.slice(index + 1))
        .join("");
      newArray.push(Number(newElement));
    }
  }
  const elements = newArray.sort((a, b) => b - a);
  return elements[0];
}

module.exports = {
  deleteDigit,
};
