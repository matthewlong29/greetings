const inquirer = require("inquirer");

const message = require("./consoleMessage");
const weather = require("./weather");
const fileCreator = require("./fileCreator.js");
const manageConsole = require("./manageConsole");
const startAngularProject = require("./startAngularProject");

const menuOptions = {
  1: "start an angular project",
  2: "organize cmndr terminal",
  3: "create a file",
  4: "get the weather"
};

const self = (module.exports = {
  /***** menu
   *
   */
  menu: () => {
    const menu = [
      {
        name: "menuOptions",
        type: "rawlist",
        message: "how can I help you?",
        choices: [
          menuOptions[1],
          menuOptions[2],
          menuOptions[3],
          menuOptions[4]
        ]
      }
    ];

    return inquirer.prompt(menu);
  }, // end menu

  /***** executeOptions
   *
   */
  executeOption: async () => {
    const optionNumber = await self.menu();

    switch (optionNumber.menuOptions) {
      case menuOptions[1]:
        startAngularProject.startProject();
        break;
      case menuOptions[2]:
        manageConsole.organizePanels();
        break;
      case menuOptions[3]:
        fileCreator.createFile();
        break;
      case menuOptions[4]:
        weather.getWeather();
        break;
      default:
        message.failure("that is not a valid option; please try again");
        self.executeOption();
        break;
    }
  } // end execute
});
