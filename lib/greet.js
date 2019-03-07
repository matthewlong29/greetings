const figlet = require("figlet");
const chalk = require("chalk");
const shell = require("shelljs");

const self = (module.exports = {
  getName: () => {
    return shell.exec("id -un").toLowerCase();
  }, // end getName
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
  }, // end getTime
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
