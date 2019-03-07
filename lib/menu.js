const inquirer = require("inquirer");

const message = require("./consoleMessage");
const startAngularProject = require("./startAngularProject");
const manageConsole = require("./manageConsole");
const fileCreator = require("./fileCreator.js");
const weather = require("./weather");

const menuOptions = {
  1: "start an angular project",
  2: "organize cmndr terminal",
  3: "create a file",
  4: "get the weather"
};

const self = (module.exports = {
  menu: () => {
    const menu = [
      {
        name: "menuOptions",
        type: "rawlist",
        message: "how can I help you?",
        choices: []
      }
    ];

    Object.entries(menuOptions).forEach(menuOption => {
      menu[0].choices.push(menuOption[1]);
    });

    return inquirer.prompt(menu);
  }, // end menu
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
