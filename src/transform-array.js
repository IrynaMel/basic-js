const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  throw new NotImplementedError("Not implemented");
  // if (!Array.isArray(arr)) {
  //   return false;
  // } else {
  //   let newArr = arr;
  //   for (let i = 0; i < newArr.length; i++) {
  //     if (newArr[i] === "--double-next") {
  //       newArr[i] = newArr[i + 1];
  //     } else if (newArr[i] === "--double-prev") {
  //       newArr[i] = newArr[i - 1];
  //     } else if (newArr[i] === "--discard-next") {
  //       let index = newArr.indexOf(newArr[i]);
  //       newArr = newArr.slice(0, index).concat(newArr.slice(index + 2));
  //     } else if (newArr[i] === "--discard-prev") {
  //       let indexPrev = newArr.indexOf(newArr[i - 1]);
  //       if (indexPrev === -1) {
  //         let curIndex = newArr.indexOf(newArr[i]);
  //         newArr = newArr.slice(0, curIndex).concat(newArr.slice(curIndex + 1));
  //       } else {
  //         let index = newArr.indexOf(newArr[i]);
  //         newArr = newArr.slice(0, index - 1).concat(newArr.slice(index + 1));
  //       }
  //     }
  //   }
  //   return newArr;
  // }
}

module.exports = {
  transform,
};
