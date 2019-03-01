const figlet = require("figlet");
const chalk = require("chalk");
const shell = require("shelljs");

const self = (module.exports = {
  /***** getName
   * TODO: this is printing username as well.... also consider removing this all together
   */
  getName: () => {
    return shell.exec("id -un").toLowerCase();
  },
  /***** getTime
   *
   */
  getTime: () => {
    const timeOfDay = new Date().getHours();
    let saying = "";
    if (timeOfDay >= 4 && timeOfDay < 12) {
      saying = "Good Morning!";
    } else if (timeOfDay >= 12 && timeOfDay < 17) {
      saying = "Good Afternoon!";
    } else if (timeOfDay >= 17 && timeOfDay < 24) {
      saying = "Good Evening!";
    } else {
      saying = "Go to sleep!";
    }
    return saying;
  },
  /***** greet
   *
   */
  greet: () => {
    self.getTime();
    console.log(
      chalk.yellow(
        figlet.textSync(
          `${self.getTime()}`,
          {
            font: "big"
          },
          (err, data) => {
            if (err) {
              console.log("Something went wrong...");
              console.dir(err);
              return;
            }
            console.log(data);
          }
        )
      )
    );
  } // end greet
});
