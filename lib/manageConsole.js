const inquirer = require("inquirer");
const shell = require("shelljs");

const message = require("./consoleMessage");

const commonLayouts = {
  1: "left [50%] | right [50%] | bottom [25%]",
  2: "left [50%] | right [50%]",
  3: "top [50%] | bottom [50%]",
  4: "left [66.6%] | right [33.3%]"
};

const self = (module.exports = {
  organizeOptions: () => {
    const options = [
      {
        name: "organizationMethod",
        type: "list",
        message: "which common panel layout would you like?",
        choices: [commonLayouts[1], commonLayouts[2], commonLayouts[3], commonLayouts[4]]
      }
    ];

    return inquirer.prompt(options);
  }, // end organizeOptions
  organizePanels: async () => {
    const chosenLayout = await self.organizeOptions();

    switch (chosenLayout.organizationMethod) {
      case commonLayouts[1]:
        message.success(`organizing consoles as ${commonLayouts[1]}`);
        shell.exec("cmd /k %ConEmuDir%\\..\\init.bat -new_console:s50H");
        shell.exec("cmd /k %ConEmuDir%\\..\\init.bat -new_console:s25V");
        break;
      case commonLayouts[2]:
        message.success(`organizing consoles as ${commonLayouts[2]}`);
        shell.exec("cmd /k %ConEmuDir%\\..\\init.bat -new_console:s50H");
        break;
      case commonLayouts[3]:
        message.success(`organizing consoles as ${commonLayouts[3]}`);
        shell.exec("cmd /k %ConEmuDir%\\..\\init.bat -new_console:s50V");
        break;         
      case commonLayouts[4]:
        message.success(`organizing consoles as ${commonLayouts[4]}`);
        shell.exec("cmd /k %ConEmuDir%\\..\\init.bat -new_console:s33H");
        break;
      default:
        message.failure("that is not a valid option; please try again");
        self.organizePanels();
        break;
    }
  } // end organizePanels
});
