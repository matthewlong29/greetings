const inquirer = require("inquirer");
const shell = require("shelljs");

const message = require("./consoleMessage");

const self = (module.exports = {
  /***** promptForFile
   *
   */
  promptForFile: () => {
    const questions = [
      {
        name: "fileName",
        type: "input",
        message: "what is the name of the file without extension?"
      },
      {
        name: "extension",
        type: "list",
        message: "what is the file extension?",
        choices: [".js", ".ts", ".html", ".scss", ".css"],
        filter: val => {
          return val.split(".")[1];
        }
      }
    ];

    return inquirer.prompt(questions);
  }, // end promptForFile

  /***** createFile
   *
   */
  createFile: async () => {
    const file = await self.promptForFile();
    const filePath = `${process.cwd()}\\${file.fileName}.${file.extension}`;
    shell.touch(filePath);
    message.success(`Done! File created at ${filePath}`);

    shell.ls("-A", "./").forEach((file) => {
      console.log(file);
    });
  } // end createFile
});
