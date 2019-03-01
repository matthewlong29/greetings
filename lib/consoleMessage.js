const chalk = require("chalk");

const self = (module.exports = {
  /***** success message
   *
   */
  success: message => {
    console.log(chalk.gray.bgGreen.bold(`SUCCESS: ${message}`));
  }, // end success

  /***** warning message
   *
   */
  warning: message => {
    console.log(chalk.gray.bgYellow.bold(`WARNING: ${message}`));
  }, // end message

  /***** failure message
   *
   */
  failure: message => {
    console.log(chalk.gray.bgRed.bold(`FAILURE: ${message}`));
  } // end failure
});
