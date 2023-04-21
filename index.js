const inquirer = require("inquirer");
const fs = require("fs");
const licenseTypes = ["MIT", "Apache 2.0", "GPLv3", "BSDv3", "None"];
const generateMarkdown = require("./generateMarkdown.js");
const questions = [
  {
    type: "input",
    message: "What is your project named?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Provide a description of your project",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "What does the user need to know?",
    name: "howTo",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

  {
    type: "list",
    message: "What kind of license?",
    choices: licenseTypes,
    name: "license",
  },
  {
    type: "input",
    message: "which dependencies are required? (npm i)",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What does a user need to know about contributing",
    name: "contribute",
  },
  {
    type: "input",
    message: "What command should be run to test this?",
    name: "test",
  },
];

inquirer.prompt(questions).then((data) => {
  const readMeOutput = generateMarkdown(data);
  fs.writeFile("README.md", readMeOutput, (err) =>
    err ? console.error(err) : console.log("README Generated!")
  );
});
