const inquirer = require("inquirer");
const shell = require("shelljs");

const message = require("./consoleMessage");

const angularProjects = {
  1: {
    name: "",
    directory: ""
  },
  2: {
    name: "",
    directory: ""
  }
};

const self = (module.exports = {
  /***** chooseAngularProject
   *
   */
  chooseAngularProject: () => {
    const projects = [
      {
        name: "projectNames",
        type: "rawlist",
        message: "which project are you working on?",
        choices: [angularProjects[1].name, angularProjects[2].name]
      }
    ];

    return inquirer.prompt(projects);
  }, // end chooseAngularProject
  startProject: async () => {
    const selectedProject = await self.chooseAngularProject();
    

    switch (selectedProject.projectNames) {
      case angularProjects[1].name:
        message.success(`starting ${angularProjects[1].name} at directory ${angularProjects[1].directory}`);
        let newDirectory = (angularProjects[1].directory);
        console.log(newDirectory);
        shell.exec(`cd ${newDirectory}`);
        break;
      case angularProjects[2].name:
        message.success(`starting ${angularProjects[2].name} at directory ${angularProjects[2].directory}`);
        shell.cd(angularProjects[2].directory);
        break;
    }
  }
});
