// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: "Enter your project title.",
      name: 'title',
    },
    {
      type: 'input',
      message: "Enter a description of your project.",
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter the installation instructions.',
      name: 'install',
      default: 'npm init',
    },
    {
        type: 'input',
        message: 'Enter a description of the application usage.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can people contribute?',
        name: 'contribute',
      },
      {
          type: 'input',
          message: 'If your application has tests, say how to use them here',
          name: 'test',
          default: 'npm test',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUser',
      },
      {
        type: 'input',
        message: "Enter your name.",
        name: 'name',
      },

      {
        type: 'input',
        message:'What is your email address?',
        name:'email',
      },
      {
        type:'list',
        name: 'license',
        message: "What kind of license you are using?",
        choices: [
          'MIT',
          'GNU',
          'None'
        ]}
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
