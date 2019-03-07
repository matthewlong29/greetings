const inquirer = require("inquirer");
const shell = require("shelljs");

const angularProjects = require("../data/angularProjects");
const message = require("./consoleMessage");

const self = (module.exports = {
  chooseAngularProject: () => {
    const projects = [
      {
        name: "projectNames",
        type: "rawlist",
        message: "which project are you working on?",
        choices: []
      }
    ];

    Object.entries(angularProjects).map(project => {
      projects[0].choices.push(project[1].name);
    });

    return inquirer.prompt(projects);
  }, // end chooseAngularProject
  startProject: async () => {
    const selectedProject = await self.chooseAngularProject();

    for (let i = 1; i <= Object.keys(angularProjects).length; i++) {
      if (selectedProject.projectNames === angularProjects[i].name) {
        message.success(
          `starting ${angularProjects[i].name} at directory ${
            angularProjects[i].directory
          }`
        );
        shell.exec(
          `cmd -new_console:s50H:d${angularProjects[i].directory} /k ng s`
        );
        shell.exec(
          `cmd -new_console:s25V:d${angularProjects[i].directory} /k ng t`
        );
      }
    }
  } // end startProject
});
