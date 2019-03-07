const chalk = require("chalk");

const self = (module.exports = {
  success: message => {
    console.log(chalk.gray.bgGreen.bold(`SUCCESS: ${message}`));
  }, // end success
  warning: message => {
    console.log(chalk.gray.bgYellow.bold(`WARNING: ${message}`));
  }, // end warning
  failure: message => {
    console.log(chalk.gray.bgRed.bold(`FAILURE: ${message}`));
  } // end failure
});
