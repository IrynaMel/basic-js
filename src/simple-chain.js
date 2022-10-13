const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

// const
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  addLink(values) {
    this.chain.push("( " + values + " )");
    return this;
  },
  removeLink(position) {
    try {
      if (
        position < 1 ||
        position > this.getLength() ||
        isNaN(position) ||
        !position
      ) {
        throw new ReferenceError("CORRECT");
      } else {
        const first = this.chain.slice(0, position - 1);
        const second = this.chain.slice(position);
        this.chain = [...first, ...second];
        return this;
      }
    } catch (error) {
      this.chain = [];
      throw new NotImplementedError(error.message);
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.chain];
    this.chain = [];

    return result.join("~~");
  },
};

module.exports = {
  chainMaker,
};
