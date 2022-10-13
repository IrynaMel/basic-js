const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    const month = date.getMonth();
    if (date instanceof Date) {
      throw new Error("Invalid date!");
    }
    switch (true) {
      case month === 0 || month === 1 || month === 11:
        return "winter";

      case month > 1 && month < 5:
        return "spring";
      case month > 4 && month < 8:
        return "summer";
      case month > 7 && month < 11:
        return "autumn";
      default:
        throw new Error("Invalid date!");
    }
  } catch (error) {
    throw new NotImplementedError(error.message);
  }
}

module.exports = {
  getSeason,
};
