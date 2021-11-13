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
        message: 'Enter informations about how people can contribute.',
        name: 'contribute',
      },
      {
          type: 'input',
          message: 'Enter any problems found in the tests performed.',
          name: 'test',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'gitHubUser',
      },
      {
        type: 'input',
        message: "Enter your name.",
        name: 'name',
      },

      {
        type: 'input',
        message:'Enter your email address.',
        name:'email',
      },
      {
        type:'list',
        name: 'license',
        message: "Choose one project license for your project.",
        choices: [
          'MIT',
          'GNU',
          'None'
        ]}
    ]

    function generatePage() {
        inquirer.prompt(questions)
      .then((response)=> {
        console.log(response)

        ## Description:
    ${response.description}
        
        
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
        
## Installation
    ${response.install}

## Usage
    ${response.usage}
    Install node.js, download the file in your computer and open in VS code or terminal. Run node index.js and answer all the questions.
  
## License
   ${genLicense}
  
## Contributing
    ${response.contribute}
    [Covenant Contributor](https://www.contributor-covenant.org/)

    ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
    
## Tests
    ${response.test}

## Questions
    For questions please contact: ${response.author}
    at  ${response.email}

    Github Profile: ${profile} `
});
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
